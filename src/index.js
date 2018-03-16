export const Nothing = new Proxy(
  {},
  {
    get() {
      return Nothing;
    }
  }
);

export const either = (left, right) => (left === Nothing ? right : left);

const handler = {
  get(target, name) {
    if (Object.prototype.hasOwnProperty.call(target, name)) {
      return [Array, Function, Object].includes(target[name].constructor)
        ? new Proxy(target[name], handler)
        : target[name];
    }

    return Nothing;
  }
};

export default object => new Proxy(object, handler);
