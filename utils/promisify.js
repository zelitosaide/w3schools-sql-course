export function promisify(f) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      args.push(function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
      f.call(this, ...args);
    });
  };
}

const loadScript = function (src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    callback(null, script);
  };
  script.onerror = function () {
    callback(new Error("Whoops!... error on load script"));
  };
  document.head.append(script);
};

const loadScriptPromise = function (src) {
  return new Promise(function (resolve, reject) {
    loadScript(src, function (error, script) {
      if (error) {
        reject(error);
      } else {
        resolve(script);
      }
    });
  });
};

const query = function (aql) {
  return Promise(function (resolve, reject) {
    connection.query(sql, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
