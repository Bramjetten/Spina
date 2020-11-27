module.exports = function() {

  // Extra headings
  Trix.config.blockAttributes.heading2 = {
    tagName: "h2", terminal: true, breakOnReturn: true, group: false }
  Trix.config.blockAttributes.heading3 = {
    tagName: "h3", terminal: true, breakOnReturn: true, group: false }
  Trix.config.blockAttributes.heading4 = {
    tagName: "h4", terminal: true, breakOnReturn: true, group: false }

  // Custom toolbar
  Trix.config.toolbar.getDefaultHTML = function() {
    return `
      <div class="flex items-center flex-wrap">
        <div class="flex items-center bg-gray-200 rounded overflow-hidden mb-3 mr-3">
          <button type="button" class="" data-trix-attribute="bold" data-trix-key="b" title="${Trix.config.lang.bold}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"/></svg>
          </button>
          <button type="button" class="" data-trix-attribute="italic" data-trix-key="i" title="${Trix.config.lang.italic}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"/></svg>
          </button>
          <button type="button" class="" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="${Trix.config.lang.link}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/></svg>
          </button>
        </div>

        <div class="flex items-center bg-gray-200 rounded overflow-hidden mr-3 mb-3" data-trix-button-group="block-tools">
          <button type="button" data-trix-attribute="heading1" title="${Trix.config.lang.heading1}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 96h-98.94A13.06 13.06 0 0 0 192 109.06v21.88A13.06 13.06 0 0 0 205.06 144H232v88H88v-88h26.94A13.06 13.06 0 0 0 128 130.94V112a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v18.94A13.06 13.06 0 0 0 13.06 144H40v224H13.06A13.06 13.06 0 0 0 0 381.06V400a16 16 0 0 0 16 16h98.94A13.06 13.06 0 0 0 128 402.94v-21.88A13.06 13.06 0 0 0 114.94 368H88v-88h144v88h-26.94A13.06 13.06 0 0 0 192 381.06V400a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.94A13.06 13.06 0 0 0 306.94 368H280V144h26.94A13.06 13.06 0 0 0 320 130.94V112a16 16 0 0 0-16-16zm256 272h-56V120a24 24 0 0 0-24-24h-24a24 24 0 0 0-21.44 13.26l-24 48A24 24 0 0 0 432 192h24v176h-56a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>
          </button>
          <button type="button" data-trix-attribute="heading2" title="${Trix.config.lang.heading2}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 96h-98.94A13.06 13.06 0 0 0 192 109.06v21.88A13.06 13.06 0 0 0 205.06 144H232v88H88v-88h26.94A13.06 13.06 0 0 0 128 130.94V112a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v18.94A13.06 13.06 0 0 0 13.06 144H40v224H13.06A13.06 13.06 0 0 0 0 381.06V400a16 16 0 0 0 16 16h98.94A13.06 13.06 0 0 0 128 402.94v-21.88A13.06 13.06 0 0 0 114.94 368H88v-88h144v88h-26.94A13.06 13.06 0 0 0 192 381.06V400a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.94A13.06 13.06 0 0 0 306.94 368H280V144h26.94A13.06 13.06 0 0 0 320 130.94V112a16 16 0 0 0-16-16zm244.14 272.13H410.82c8.52-60.35 146-79.28 146-179.31C556.8 134.17 515 96 455.05 96a114.71 114.71 0 0 0-97.92 55.05 11.81 11.81 0 0 0 3.58 15.95L382 181.23a11.89 11.89 0 0 0 16.27-3c13-18.23 31.58-31.35 53.72-31.35 29.57 0 49.43 18.08 49.43 45 0 67-149.45 84-149.45 195.49a137.14 137.14 0 0 0 1.39 18.42 12.18 12.18 0 0 0 11.8 10.21h183A11.85 11.85 0 0 0 560 404.18V380a11.85 11.85 0 0 0-11.86-11.87z"/></svg>
          </button>
          <button type="button" data-trix-attribute="heading3" title="${Trix.config.lang.heading3}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480.07 219.78l75.39-85.88a11.82 11.82 0 0 0 2.93-7.76v-18.32A11.89 11.89 0 0 0 546.44 96H379.87a11.88 11.88 0 0 0-11.94 11.82V132a11.88 11.88 0 0 0 11.94 11.83s102.44-.11 106-.25c-2.77 2.88-74.12 85.58-74.12 85.58a11.67 11.67 0 0 0-1.86 12.38l6.71 15.3a12.94 12.94 0 0 0 10.93 7.16h17.08c48.61 0 65.85 27.23 65.85 50.56 0 28.57-24.58 50.13-57.17 50.13-24 0-46.88-10.46-65.29-26.89a12 12 0 0 0-17.76 1.81l-16 22a11.73 11.73 0 0 0 1.4 15.41c24.6 23.34 60.62 39 99.38 39 64.2 0 109.86-46.22 109.86-103.17.01-51.1-36.73-84.17-84.81-93.07zM304 96h-98.94A13.06 13.06 0 0 0 192 109.06v21.88A13.06 13.06 0 0 0 205.06 144H232v88H88v-88h26.94A13.06 13.06 0 0 0 128 130.94V112a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v18.94A13.06 13.06 0 0 0 13.06 144H40v224H13.06A13.06 13.06 0 0 0 0 381.06V400a16 16 0 0 0 16 16h98.94A13.06 13.06 0 0 0 128 402.94v-21.88A13.06 13.06 0 0 0 114.94 368H88v-88h144v88h-26.94A13.06 13.06 0 0 0 192 381.06V400a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.94A13.06 13.06 0 0 0 306.94 368H280V144h26.94A13.06 13.06 0 0 0 320 130.94V112a16 16 0 0 0-16-16z"/></svg>
          </button>
          <button type="button" data-trix-attribute="heading4" title="${Trix.config.lang.heading4}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 96h-98.94A13.06 13.06 0 0 0 192 109.06v21.88A13.06 13.06 0 0 0 205.06 144H232v88H88v-88h26.94A13.06 13.06 0 0 0 128 130.94V112a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v18.94A13.06 13.06 0 0 0 13.06 144H40v224H13.06A13.06 13.06 0 0 0 0 381.06V400a16 16 0 0 0 16 16h98.94A13.06 13.06 0 0 0 128 402.94v-21.88A13.06 13.06 0 0 0 114.94 368H88v-88h144v88h-26.94A13.06 13.06 0 0 0 192 381.06V400a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.94A13.06 13.06 0 0 0 306.94 368H280V144h26.94A13.06 13.06 0 0 0 320 130.94V112a16 16 0 0 0-16-16zm256 136h-16V112a16 16 0 0 0-16-16h-16a16 16 0 0 0-16 16v120h-96V112a16 16 0 0 0-16-16h-16a16 16 0 0 0-16 16v136a32 32 0 0 0 32 32h112v120a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V280h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>
          </button>
        </div>

        <div class="flex items-center bg-gray-200 rounded overflow-hidden mr-3 mb-3">
          <button type="button" data-trix-action="x-media-picker" data-action="media-picker#openModal" title="${Trix.config.lang.image}" tabindex="-1">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
            </svg>
          </button>
          <button type="button" data-trix-attribute="quote" title="${Trix.config.lang.quote}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
          </button>
          <button type="button" data-trix-attribute="code" title="${Trix.config.lang.code}" tabindex="-1">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="${Trix.config.lang.bullets}" tabindex="-1">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>
          </button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="${Trix.config.lang.numbers}" tabindex="-1">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.84a154.82 154.82 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 392H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.9 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 0 1 9.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320z"/></svg>
          </button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="${Trix.config.lang.outdent}" tabindex="-1">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 0 0 0 22.62zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 308.83v22.34A12.82 12.82 0 0 0 204.83 344h230.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296zM432 40H16A16 16 0 0 0 0 56v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16zm3.17 128H204.83A12.82 12.82 0 0 0 192 180.83v22.34A12.82 12.82 0 0 0 204.83 216h230.34A12.82 12.82 0 0 0 448 203.17v-22.34A12.82 12.82 0 0 0 435.17 168z"/></svg>
          </button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="${Trix.config.lang.indent}" tabindex="-1">
            <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM435.17 168H204.83A12.82 12.82 0 0 0 192 180.83v22.34A12.82 12.82 0 0 0 204.83 216h230.34A12.82 12.82 0 0 0 448 203.17v-22.34A12.82 12.82 0 0 0 435.17 168zM432 48H16A16 16 0 0 0 0 64v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm3.17 248H204.83A12.82 12.82 0 0 0 192 308.83v22.34A12.82 12.82 0 0 0 204.83 344h230.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z"/></svg>
          </button>
        </div>
        
        <div class="absolute hidden w-full" data-target="trix.imageFields">
          <input type="text" class="form-input w-full text-sm" placeholder="Alt text" data-target="trix.altField" data-action="keyup->trix#setAltText" />
        </div>

        <div data-trix-dialogs>
          <div data-trix-dialog="href" data-trix-dialog-attribute="href">
            <div class="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-25 z-50">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
                <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <input type="text" name="href" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="${Trix.config.lang.urlPlaceholder}" aria-label="${Trix.config.lang.url}" data-trix-input>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <input type="button" class="inline-flex cursor-pointer justify-center w-full rounded-md border border-transparent px-4 py-2 bg-spina text-base leading-6 font-medium text-white shadow-sm hover:bg-spina-dark focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5" value="${Trix.config.lang.link}" data-trix-method="setAttribute">
                  </span>
                  <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <input type="button" class="inline-flex cursor-pointer justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5" value="${Trix.config.lang.unlink}" data-trix-method="removeAttribute">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}()