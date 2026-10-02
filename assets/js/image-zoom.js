/**
 * Interactive Image Lightbox & Zoom Controller
 * Enables fullscreen modal viewing, zooming, panning, and keyboard navigation
 * for all images (and SVG diagrams) on the website.
 */
(function () {
  'use strict';

  let currentScale = 1;
  const minScale = 0.5;
  const maxScale = 5.0;
  const scaleStep = 0.25;

  let translateX = 0;
  let translateY = 0;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialTranslateX = 0;
  let initialTranslateY = 0;

  let modal, backdrop, stage, targetImg, captionEl, titleEl, scaleBadge, closeBtn, zoomInBtn, zoomOutBtn, resetBtn, fullscreenBtn;
  let isModalOpen = false;

  // Touch pinch zoom variables
  let touchStartDist = 0;
  let touchStartScale = 1;

  function initImageZoom() {
    createModalDOM();
    bindImageListeners();
    bindModalControls();

    // Use MutationObserver to bind dynamically inserted images or rendered diagrams
    const observer = new MutationObserver(() => {
      bindImageListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function createModalDOM() {
    if (document.getElementById('imgZoomModal')) return;

    const modalHTML = `
      <div id="imgZoomModal" class="img-zoom-modal" aria-hidden="true" role="dialog" aria-label="Image Fullscreen Lightbox">
        <div class="img-zoom-backdrop" id="imgZoomBackdrop"></div>
        
        <div class="img-zoom-header">
          <div class="img-zoom-title-group">
            <span class="img-zoom-title" id="imgZoomTitle">Image Viewer</span>
            <span class="img-zoom-badge" id="imgZoomScale">100%</span>
          </div>
          
          <div class="img-zoom-controls">
            <button type="button" class="img-zoom-btn" id="imgZoomOutBtn" title="Zoom Out (-)" aria-label="Zoom Out">
              <i class="fas fa-search-minus"></i>
            </button>
            <button type="button" class="img-zoom-btn" id="imgZoomInBtn" title="Zoom In (+)" aria-label="Zoom In">
              <i class="fas fa-search-plus"></i>
            </button>
            <button type="button" class="img-zoom-btn" id="imgZoomResetBtn" title="Reset Zoom (0)" aria-label="Reset Zoom">
              <i class="fas fa-rotate-left"></i>
            </button>
            <button type="button" class="img-zoom-btn" id="imgZoomFullscreenBtn" title="Toggle Fullscreen (F)" aria-label="Toggle Fullscreen">
              <i class="fas fa-expand"></i>
            </button>
            <button type="button" class="img-zoom-btn img-zoom-close" id="imgZoomCloseBtn" title="Close (Esc)" aria-label="Close Viewer">
              <i class="fas fa-xmark"></i>
            </button>
          </div>
        </div>

        <div class="img-zoom-stage" id="imgZoomStage">
          <div class="img-zoom-wrapper" id="imgZoomWrapper">
            <img id="imgZoomTarget" src="" alt="" draggable="false" />
          </div>
        </div>

        <div class="img-zoom-caption-bar" id="imgZoomCaptionBar">
          <p id="imgZoomCaption"></p>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    modal = document.getElementById('imgZoomModal');
    backdrop = document.getElementById('imgZoomBackdrop');
    stage = document.getElementById('imgZoomStage');
    targetImg = document.getElementById('imgZoomTarget');
    captionEl = document.getElementById('imgZoomCaption');
    titleEl = document.getElementById('imgZoomTitle');
    scaleBadge = document.getElementById('imgZoomScale');
    closeBtn = document.getElementById('imgZoomCloseBtn');
    zoomInBtn = document.getElementById('imgZoomInBtn');
    zoomOutBtn = document.getElementById('imgZoomOutBtn');
    resetBtn = document.getElementById('imgZoomResetBtn');
    fullscreenBtn = document.getElementById('imgZoomFullscreenBtn');
  }

  function shouldMakeZoomable(el) {
    if (!el) return false;
    if (el.classList.contains('no-zoom')) return false;
    if (el.closest('.img-zoom-modal')) return false;
    if (el.tagName === 'IMG') {
      if (el.width > 0 && el.width < 30 && el.height > 0 && el.height < 30) return false;
    }
    return true;
  }

  function bindImageListeners() {
    // 1. Target standard img tags
    const images = document.querySelectorAll('.markdown-body img, main img, article img, .zoomable-img, img:not(.no-zoom)');
    images.forEach(img => {
      if (!shouldMakeZoomable(img)) return;
      if (img.getAttribute('data-zoom-initialized')) return;

      img.setAttribute('data-zoom-initialized', 'true');
      img.classList.add('zoomable-img');
      if (!img.title) {
        img.title = img.alt ? `${img.alt} (Click to view full screen)` : 'Click to view full screen & zoom';
      }

      img.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const src = img.getAttribute('src') || img.src;
        const alt = img.getAttribute('alt') || img.title || '';
        openModal(src, alt);
      });
    });

    // 2. Target rendered Mermaid SVGs for seamless diagram zooming
    const mermaidElements = document.querySelectorAll('.mermaid svg');
    mermaidElements.forEach(svg => {
      if (svg.getAttribute('data-zoom-initialized')) return;
      svg.setAttribute('data-zoom-initialized', 'true');
      svg.style.cursor = 'zoom-in';

      const parentMermaid = svg.closest('.mermaid');
      if (parentMermaid) {
        parentMermaid.setAttribute('title', 'Click diagram to view full screen & zoom');
        parentMermaid.addEventListener('click', (e) => {
          // If user didn't click inside a button or link
          if (e.target.closest('a, button')) return;
          e.preventDefault();
          e.stopPropagation();

          // Convert SVG to data URL
          const serializer = new XMLSerializer();
          let svgString = serializer.serializeToString(svg);
          if (!svgString.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
            svgString = svgString.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
          }
          const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
          openModal(svgDataUrl, 'Architecture Diagram');
        });
      }
    });
  }

  function openModal(src, alt) {
    if (!modal) createModalDOM();
    if (!src) return;

    targetImg.src = src;
    targetImg.alt = alt || '';

    const displayCaption = alt && !alt.includes('(Click to view') ? alt : '';
    if (displayCaption) {
      captionEl.textContent = displayCaption;
      titleEl.textContent = displayCaption.length > 45 ? displayCaption.substring(0, 42) + '...' : displayCaption;
      document.getElementById('imgZoomCaptionBar').style.display = 'block';
    } else {
      captionEl.textContent = '';
      titleEl.textContent = 'Image Preview';
      document.getElementById('imgZoomCaptionBar').style.display = 'none';
    }

    resetTransform();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('img-zoom-open');
    isModalOpen = true;
  }

  function closeModal() {
    if (!modal || !isModalOpen) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('img-zoom-open');
    isModalOpen = false;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    setTimeout(() => {
      if (!isModalOpen && targetImg) {
        targetImg.src = '';
      }
    }, 250);
  }

  function updateTransform() {
    currentScale = Math.min(Math.max(currentScale, minScale), maxScale);
    targetImg.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${currentScale})`;
    scaleBadge.textContent = `${Math.round(currentScale * 100)}%`;

    if (currentScale > 1.05) {
      stage.classList.add('is-zoomed');
    } else {
      stage.classList.remove('is-zoomed');
    }
  }

  function resetTransform() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  }

  function zoomTo(newScale, focalX, focalY) {
    const oldScale = currentScale;
    newScale = Math.min(Math.max(newScale, minScale), maxScale);
    if (newScale === oldScale) return;

    if (focalX !== undefined && focalY !== undefined) {
      const rect = stage.getBoundingClientRect();
      const stageCenterX = rect.width / 2;
      const stageCenterY = rect.height / 2;

      const mouseX = focalX - rect.left - stageCenterX;
      const mouseY = focalY - rect.top - stageCenterY;

      const scaleRatio = newScale / oldScale;
      translateX = mouseX - scaleRatio * (mouseX - translateX);
      translateY = mouseY - scaleRatio * (mouseY - translateY);
    } else if (newScale === 1) {
      translateX = 0;
      translateY = 0;
    }

    currentScale = newScale;
    updateTransform();
  }

  function toggleZoom(e) {
    if (currentScale > 1.2) {
      resetTransform();
    } else {
      const clickX = e ? e.clientX : undefined;
      const clickY = e ? e.clientY : undefined;
      zoomTo(2.5, clickX, clickY);
    }
  }

  function bindModalControls() {
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    zoomInBtn.addEventListener('click', () => zoomTo(currentScale + scaleStep));
    zoomOutBtn.addEventListener('click', () => zoomTo(currentScale - scaleStep));
    resetBtn.addEventListener('click', resetTransform);

    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        modal.requestFullscreen().catch(err => {
          console.error(`Fullscreen request failed: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });

    // Toggle zoom on click / double click inside target image
    let clickTimer = null;
    targetImg.addEventListener('click', (e) => {
      e.stopPropagation();
      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        toggleZoom(e);
      } else {
        clickTimer = setTimeout(() => {
          clickTimer = null;
          if (currentScale <= 1.05) {
            toggleZoom(e);
          }
        }, 220);
      }
    });

    // Mouse Wheel Zooming centered on mouse position
    stage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? scaleStep : -scaleStep;
      zoomTo(currentScale + delta, e.clientX, e.clientY);
    }, { passive: false });

    // Drag / Pan Handling
    stage.addEventListener('mousedown', (e) => {
      if (e.target.closest('.img-zoom-controls') || e.target.closest('.img-zoom-header')) return;
      if (currentScale <= 1.05) return;

      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialTranslateX = translateX;
      initialTranslateY = translateY;
      stage.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      translateX = initialTranslateX + dx;
      translateY = initialTranslateY + dy;
      updateTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        stage.classList.remove('is-dragging');
      }
    });

    // Mobile Touch Gestures
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        if (currentScale > 1.05) {
          isDragging = true;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          initialTranslateX = translateX;
          initialTranslateY = translateY;
        }
      } else if (e.touches.length === 2) {
        isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        touchStartScale = currentScale;
      }
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && isDragging) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        translateX = initialTranslateX + dx;
        translateY = initialTranslateY + dy;
        updateTransform();
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = dist / touchStartDist;
        zoomTo(touchStartScale * factor);
      }
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      isDragging = false;
      touchStartDist = 0;
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case '+':
        case '=':
          zoomTo(currentScale + scaleStep);
          break;
        case '-':
        case '_':
          zoomTo(currentScale - scaleStep);
          break;
        case '0':
        case 'r':
        case 'R':
          resetTransform();
          break;
        case 'f':
        case 'F':
          fullscreenBtn.click();
          break;
        case 'ArrowLeft':
          if (currentScale > 1) { translateX += 40; updateTransform(); }
          break;
        case 'ArrowRight':
          if (currentScale > 1) { translateX -= 40; updateTransform(); }
          break;
        case 'ArrowUp':
          if (currentScale > 1) { translateY += 40; updateTransform(); }
          break;
        case 'ArrowDown':
          if (currentScale > 1) { translateY -= 40; updateTransform(); }
          break;
      }
    });
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageZoom);
  } else {
    initImageZoom();
  }
})();
