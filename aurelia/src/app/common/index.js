/**
 * Configure custom resources that can be injected
 * in the views without having to use <require>
 */

export function configure(config) {
  config.globalResources(
    './pagination/paginate-converter',
    './pagination/pager-element',
  );
}