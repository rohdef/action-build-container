import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID7hggqo3abtya as VOID,
  iterator3f5i676wpaa3g as iterator,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance14hm69wy3kr8u as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  SequenceScope1coiso86pqzq2 as SequenceScope,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  intercepted2ogpsikxxj4u0 as intercepted,
  resume1307kgocbn6ch as resume,
  resumeWithExceptionlaw2x581week as resumeWithException,
} from './kotlin-kotlin-stdlib.mjs';
import { CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl } from './kotlinx-coroutines-core.mjs';
//region block: imports
var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
//endregion
//region block: pre-declaration
initMetadataForClass(AsyncIteratorAdapter, 'AsyncIteratorAdapter', VOID, VOID, VOID, [0]);
initMetadataForLambda(iteratorFromJsIteratorLike$slambda, CoroutineImpl, VOID, [1]);
//endregion
function get_POW() {
  _init_properties_BigInt_kt__agomkx();
  return POW;
}
var POW;
function get_n(_this__u8e3s4) {
  _init_properties_BigInt_kt__agomkx();
  return BigInt(_this__u8e3s4);
}
var properties_initialized_BigInt_kt_nhzooh;
function _init_properties_BigInt_kt__agomkx() {
  if (!properties_initialized_BigInt_kt_nhzooh) {
    properties_initialized_BigInt_kt_nhzooh = true;
    POW = Function('base', 'exponent', 'return base ** exponent');
  }
}
function invoke(_this__u8e3s4, p1, p2) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4(p1, p2);
}
function iteratorFromAsyncIterable(source) {
  // Inline function 'js.iterable.AsyncIterator.iterator' call
  var this_0 = source[Symbol.asyncIterator]();
  return iteratorFromAsyncIteratorLike(this_0);
}
function iteratorFromAsyncIteratorLike(source) {
  return new AsyncIteratorAdapter(source);
}
function AsyncIteratorAdapter(source) {
  this.gl_1 = source;
  this.hl_1 = null;
}
function iteratorFromJsIterable(source) {
  // Inline function 'js.iterable.JsIterator.iterator' call
  var this_0 = source[Symbol.iterator]();
  return iteratorFromJsIteratorLike(this_0);
}
function iteratorFromJsIteratorLike(source) {
  return iterator(iteratorFromJsIteratorLike$slambda_0(source, null));
}
function iteratorFromJsIteratorLike$slambda($source, resultContinuation) {
  this.ql_1 = $source;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(iteratorFromJsIteratorLike$slambda).vl = function ($this$iterator, $completion) {
  var tmp = this.wl($this$iterator, $completion);
  tmp.p5_1 = Unit_instance;
  tmp.q5_1 = null;
  return tmp.v5();
};
protoOf(iteratorFromJsIteratorLike$slambda).f6 = function (p1, $completion) {
  return this.vl(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(iteratorFromJsIteratorLike$slambda).v5 = function () {
  var suspendResult = this.p5_1;
  $sm: do
    try {
      var tmp = this.n5_1;
      switch (tmp) {
        case 0:
          this.o5_1 = 5;
          this.n5_1 = 1;
          continue $sm;
        case 1:
          var tmp_0 = this;
          var tmp_1 = this.ql_1.next();
          tmp_0.sl_1 = tmp_1 instanceof constructor ? tmp_1 : null;
          if (this.sl_1 == null) {
            this.n5_1 = 4;
            var tmp_2 = this;
            continue $sm;
          } else {
            this.tl_1 = this.sl_1;
            this.n5_1 = 2;
            continue $sm;
          }

        case 2:
          this.ul_1 = this.tl_1;
          this.n5_1 = 3;
          suspendResult = this.rl_1.c9(this.ul_1.value, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          this.n5_1 = 1;
          continue $sm;
        case 4:
          return Unit_instance;
        case 5:
          throw this.q5_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.o5_1 === 5) {
        throw e;
      } else {
        this.n5_1 = this.o5_1;
        this.q5_1 = e;
      }
    }
   while (true);
};
protoOf(iteratorFromJsIteratorLike$slambda).wl = function ($this$iterator, completion) {
  var i = new iteratorFromJsIteratorLike$slambda(this.ql_1, completion);
  i.rl_1 = $this$iterator;
  return i;
};
function iteratorFromJsIteratorLike$slambda_0($source, resultContinuation) {
  var i = new iteratorFromJsIteratorLike$slambda($source, resultContinuation);
  var l = function ($this$iterator, $completion) {
    return i.vl($this$iterator, $completion);
  };
  l.$arity = 1;
  return l;
}
function copy(_this__u8e3s4, enumerable, value, get, writable, set, configurable) {
  enumerable = enumerable === VOID ? VOID : enumerable;
  value = value === VOID ? VOID : value;
  get = get === VOID ? VOID : get;
  writable = writable === VOID ? VOID : writable;
  set = set === VOID ? VOID : set;
  configurable = configurable === VOID ? VOID : configurable;
  return Object.assign({}, _this__u8e3s4, {enumerable: enumerable, value: value, get: get, writable: writable, set: set, configurable: configurable});
}
function invoke_0(_this__u8e3s4, enumerable, value, get, writable, set, configurable) {
  enumerable = enumerable === VOID ? VOID : enumerable;
  value = value === VOID ? VOID : value;
  get = get === VOID ? VOID : get;
  writable = writable === VOID ? VOID : writable;
  set = set === VOID ? VOID : set;
  configurable = configurable === VOID ? VOID : configurable;
  return {enumerable: enumerable, value: value, get: get, writable: writable, set: set, configurable: configurable};
}
function awaitPromiseLike(promise, $completion) {
  // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
  var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
  cancellable.xe();
  // Inline function 'js.promise.internal.awaitPromiseLike.stub_for_inlining' call
  thenToContinuation(promise, cancellable);
  return cancellable.hf();
}
function thenToContinuation(promise, continuation) {
  var tmp = resume$ref(continuation);
  promise.then(tmp, resumeWithException$ref(continuation));
}
function resume$ref($boundThis) {
  var l = function (p0) {
    resume($boundThis, p0);
    return Unit_instance;
  };
  l.callableName = 'resume';
  return l;
}
function resumeWithException$ref($boundThis) {
  var l = function (p0) {
    resumeWithException($boundThis, p0);
    return Unit_instance;
  };
  l.callableName = 'resumeWithException';
  return l;
}

//# sourceMappingURL=kotlin-js.mjs.map
