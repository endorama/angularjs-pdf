export const NgPdfFactory = function () {
  'ngInject';

  const defaultOptions = {
    currentPage: 1,
    fitToPage: false,
    httpHeaders: null,
    url: null,
    scale: 1,
    useCredentials: false,
    rotation: 0,
    pageCount: null,
  };

  return function (opts) {
    let self = this

    let options = Object.assign({}, defaultOptions, opts)

    // defined all properties in defaultOptions and opts as property of this object
    Object.keys(options).forEach((e) => {
      Object.defineProperty(self, e, {
        enumerable: true,
        set: (value) => { options[e] = value },
        get: () => { return options[e] }
      });
    })

    this.goPrevious = () => {
      if (options.currentPage <= 1) {
        return;
      }
      options.currentPage -= 1;
    };

    this.goNext = () => {
      if (options.currentPage >= options.pageCount) {
        return;
      }
      options.currentPage += 1;
    };

    this.zoomIn = () => {
      options.fitToPage = false;
      options.scale = parseFloat(options.scale) + 0.2
    };

    this.zoomOut = () => {
      options.fitToPage = false;
      options.scale = parseFloat(options.scale) - 0.2
    };

    this.fit = () => {
      options.fitToPage = true;
    }
  };
}
