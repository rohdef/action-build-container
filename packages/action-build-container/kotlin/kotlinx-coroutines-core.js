(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var protoOf = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.b3;
  var Element = kotlin_kotlin.$_$.y1;
  var Continuation = kotlin_kotlin.$_$.u1;
  var initMetadataForClass = kotlin_kotlin.$_$.h2;
  var VOID = kotlin_kotlin.$_$.b;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.w;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.l1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.t;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.u;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.q1;
  var Key_instance = kotlin_kotlin.$_$.v;
  var initMetadataForObject = kotlin_kotlin.$_$.l2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.p1;
  var get = kotlin_kotlin.$_$.r1;
  var minusKey = kotlin_kotlin.$_$.s1;
  var ContinuationInterceptor = kotlin_kotlin.$_$.t1;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q;
  var addSuppressed = kotlin_kotlin.$_$.d3;
  var initMetadataForInterface = kotlin_kotlin.$_$.j2;
  var Enum = kotlin_kotlin.$_$.w2;
  var startCoroutine = kotlin_kotlin.$_$.b2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g3;
  var Long = kotlin_kotlin.$_$.z2;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.c;
  var RuntimeException = kotlin_kotlin.$_$.a3;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p;
  var captureStack = kotlin_kotlin.$_$.d2;
  var Error_0 = kotlin_kotlin.$_$.x2;
  var Error_init_$Init$ = kotlin_kotlin.$_$.k;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j;
  var equals = kotlin_kotlin.$_$.e2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.h3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.n2;
  var toString = kotlin_kotlin.$_$.p2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.i3;
  var ArrayList = kotlin_kotlin.$_$.a1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var plus = kotlin_kotlin.$_$.z1;
  var get_0 = kotlin_kotlin.$_$.w1;
  var fold = kotlin_kotlin.$_$.v1;
  var minusKey_0 = kotlin_kotlin.$_$.x1;
  var anyToString = kotlin_kotlin.$_$.c2;
  var UnsupportedOperationException = kotlin_kotlin.$_$.c3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var Exception = kotlin_kotlin.$_$.y2;
  var Companion_instance = kotlin_kotlin.$_$.y;
  var createFailure = kotlin_kotlin.$_$.e3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s;
  var intercepted = kotlin_kotlin.$_$.m1;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.n1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var removeFirstOrNull = kotlin_kotlin.$_$.i1;
  var KtList = kotlin_kotlin.$_$.c1;
  var Collection = kotlin_kotlin.$_$.b1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.f3;
  var getStringHashCode = kotlin_kotlin.$_$.f2;
  var hashCode = kotlin_kotlin.$_$.g2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Element, Continuation, CoroutineScope], [0]);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Element], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtList, Collection]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.rb(parentContext.i6(Key_instance_2));
    }
    this.ub_1 = parentContext.q9(this);
  }
  protoOf(AbstractCoroutine).b6 = function () {
    return this.ub_1;
  };
  protoOf(AbstractCoroutine).vb = function () {
    return this.ub_1;
  };
  protoOf(AbstractCoroutine).wb = function () {
    return protoOf(JobSupport).wb.call(this);
  };
  protoOf(AbstractCoroutine).xb = function (value) {
  };
  protoOf(AbstractCoroutine).yb = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).zb = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).ac = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.yb(state.bc_1, state.dc());
    } else {
      this.xb((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).g6 = function (result) {
    var state = this.ec(toState(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.fc(state);
  };
  protoOf(AbstractCoroutine).fc = function (state) {
    return this.gc(state);
  };
  protoOf(AbstractCoroutine).hc = function (exception) {
    handleCoroutineException(this.ub_1, exception);
  };
  protoOf(AbstractCoroutine).ic = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ub_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).ic.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).ic.call(this);
  };
  protoOf(AbstractCoroutine).jc = function (start, receiver, block) {
    start.mc(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.nd() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.jc(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).rd = function () {
    var tmp = this.md();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.vd_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).sc = function () {
    startCoroutineCancellable_0(this.vd_1, this);
  };
  function _get_parentHandle__f8dcex($this) {
    return $this.xd_1.kotlinx$atomicfu$value;
  }
  function CancellableContinuationImpl() {
  }
  protoOf(CancellableContinuationImpl).yd = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.zd();
    this.xd_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.bc_1 = cause;
    this.cc_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).dc = function () {
    return this.cc_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).ae = function () {
    return this.cc_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.bc_1.toString() + ']';
  };
  function toState(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).ce = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).j6 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).k6 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ke();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.i6(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp23_safe_receiver.le(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).vb = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).mc = function (block, receiver, completion) {
    var tmp;
    switch (this.a1_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).nd = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.ne_1 = new Long(0, 0);
    this.oe_1 = false;
    this.pe_1 = null;
  }
  protoOf(EventLoop).qe = function () {
    var tmp0_elvis_lhs = this.pe_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.z8();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.se();
    return true;
  };
  protoOf(EventLoop).te = function (task) {
    var tmp0_elvis_lhs = this.pe_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.pe_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.x8(task);
  };
  protoOf(EventLoop).ue = function () {
    return this.ne_1.j1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).ve = function () {
    var tmp27_safe_receiver = this.pe_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.q();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).we = function (unconfined) {
    this.ne_1 = this.ne_1.k1(delta(this, unconfined));
    if (!unconfined)
      this.oe_1 = true;
  };
  protoOf(EventLoop).xe = function (unconfined) {
    this.ne_1 = this.ne_1.l1(delta(this, unconfined));
    if (this.ne_1.j1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.oe_1) {
      this.ye();
    }
  };
  protoOf(EventLoop).ye = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ze_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).af = function () {
    var tmp0_elvis_lhs = this.ze_1.cf();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ze_1.df(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).zd = function () {
  };
  protoOf(NonDisposableHandle).cd = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.yc(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.if();
      tmp = _this__u8e3s4.xc(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.jf(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.kf_1 = isActive;
  }
  protoOf(Empty).wb = function () {
    return this.kf_1;
  };
  protoOf(Empty).lf = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.kf_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).wb = function () {
    return true;
  };
  protoOf(NodeList).lf = function () {
    return this;
  };
  protoOf(NodeList).pf = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.o5('List{');
    this_0.o5(state);
    this_0.o5('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.qf_1;
    while (!equals(cur, this)) {
      // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.o5(', ');
        this_0.n5(node);
      }
      cur = cur.qf_1;
    }
    this_0.o5(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.pf('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).vf = function () {
    var tmp = this.hf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).wb = function () {
    return true;
  };
  protoOf(JobNode).lf = function () {
    return null;
  };
  protoOf(JobNode).zd = function () {
    return this.vf().zc(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.vf()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.bg_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.bg_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.bc_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.cg();
    var exceptions = state.dg(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.jd(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).ae();
      }
    }
    if (!wasCancelling) {
      $this.gd(finalException);
    }
    $this.ac(finalState);
    var casSuccess = $this.pb_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.cg()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.zb() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.i(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.e();
        while (_iterator__ex2g4s_0.f()) {
          var element_0 = _iterator__ex2g4s_0.g();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.h() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.h());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.e();
    while (_iterator__ex2g4s.f()) {
      var exception = _iterator__ex2g4s.g();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.o(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.pb_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.gd(null);
    $this.ac(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.oc();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.completeStateFinalization.<anonymous>' call
      tmp47_safe_receiver.zd();
      $this.nc(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.bc_1;
    if (state instanceof JobNode) {
      try {
        state.jf(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.hc(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.lf();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp49_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.gd(cause);
    list.uf(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.qf_1;
    while (!equals(cur, list)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCancelling.<anonymous>' call
        tmp = node.if();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.jf(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.qf_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.hc(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.hd())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.oc();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.cd(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    _this__u8e3s4.uf(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.qf_1;
    while (!equals(cur, _this__u8e3s4)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCompletion.<anonymous>' call
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.jf(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.qf_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.hc(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.kf_1)
        return 0;
      if (!$this.pb_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.sc();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.pb_1.atomicfu$compareAndSet(state, state.eg_1))
          return -1;
        $this.sc();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.kf_1 ? list : new InactiveNodeList(list);
    $this.pb_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.xf(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.qf_1;
    $this.pb_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.pc();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.fg();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.zb() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ed();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.pc();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp1.gg())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.cg();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.hg(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.ig();
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            notifyCancelling($this, tmp1.yf_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp0_elvis_lhs_0 = causeExceptionCache;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var causeException_0 = tmp_1;
            if (tmp1.wb()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.lf();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.pb_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.fg())
      return get_COMPLETING_ALREADY();
    finishing.jg(true);
    if (!(finishing === state)) {
      if (!$this.pb_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.cg();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
      finishing.hg(tmp65_safe_receiver.bc_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.ig();
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild(list, $this);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.uf(2);
    var anotherChild = nextChild(list, $this);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp67_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.bc_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.og_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.yf_1.uf(2);
    var waitChildAgain = nextChild(lastChild, $this);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.gc(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.sf_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.rf_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.qf_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.sf_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.cg() ? 'Cancelling' : state.fg() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.wb() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.yf_1 = list;
    this.zf_1 = atomic$boolean$1(isCompleting);
    this.ag_1 = atomic$ref$1(rootCause);
    this.bg_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).lf = function () {
    return this.yf_1;
  };
  protoOf(Finishing).jg = function (value) {
    this.zf_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).fg = function () {
    return this.zf_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).pg = function (value) {
    this.ag_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).ig = function () {
    return this.ag_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).gg = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).cg = function () {
    return !(this.ig() == null);
  };
  protoOf(Finishing).wb = function () {
    return this.ig() == null;
  };
  protoOf(Finishing).dg = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.o(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.ig();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
      list.p2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.o(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).hg = function (exception) {
    var rootCause = this.ig();
    if (rootCause == null) {
      this.pg(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.o(eh);
        this_0.o(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).o(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.cg() + ', completing=' + this.fg() + ', rootCause=' + toString_0(this.ig()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.yf_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.ug_1 = parent;
    this.vg_1 = state;
    this.wg_1 = child;
    this.xg_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).if = function () {
    return false;
  };
  protoOf(ChildCompletion).jf = function (cause) {
    continueCompleting(this.ug_1, this.vg_1, this.wg_1, this.xg_1);
  };
  function JobSupport(active) {
    this.pb_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.qb_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).t = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).nc = function (value) {
    this.qb_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).oc = function () {
    return this.qb_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).rb = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.nc(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.rc();
    var handle = parent.fd(this);
    this.nc(handle);
    if (this.qc()) {
      handle.zd();
      this.nc(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).pc = function () {
    return this.pb_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).wb = function () {
    var state = this.pc();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.wb();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).qc = function () {
    var tmp = this.pc();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).rc = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.pc();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).sc = function () {
  };
  protoOf(JobSupport).tc = function () {
    var state = this.pc();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.ig();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.uc(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.vc(state.bc_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).uc = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.zb() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).vc = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.uc(_this__u8e3s4, message) : $super.uc.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).wc = function (handler) {
    return this.yc(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).xc = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.yc(invokeImmediately, tmp);
  };
  protoOf(JobSupport).yc = function (invokeImmediately, node) {
    node.hf_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.pc();
        if (state instanceof Empty) {
          if (state.kf_1) {
            if (this.pb_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.lf();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
              var tmp;
              if (node.if()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.ig();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.tf(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.jf(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.tf(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.pc();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.jf(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.bc_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).zc = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.pc();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.pb_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.lf() == null)) {
            node.wf();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ad = function () {
    return false;
  };
  protoOf(JobSupport).zb = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).bd = function (parentJob) {
    this.dd(parentJob);
  };
  protoOf(JobSupport).cd = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.dd(cause) && this.id();
  };
  protoOf(JobSupport).dd = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ad()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.gc(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ed = function () {
    var state = this.pc();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.ig();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.bc_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
  };
  protoOf(JobSupport).ec = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.pc();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).fd = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
    this_0.hf_1 = this;
    var node = this_0;
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.pc();
        if (state instanceof Empty) {
          if (state.kf_1) {
            if (this.pb_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.lf();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
              var addedBeforeCancellation = list.tf(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.tf(node, 3);
                var latestState = this.pc();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.ig();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.bc_1;
                }
                var rootCause = tmp_0;
                node.jf(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$1;
    if (added)
      return node;
    var tmp_2 = this.pc();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.jf(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.bc_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).hc = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).gd = function (cause) {
  };
  protoOf(JobSupport).hd = function () {
    return false;
  };
  protoOf(JobSupport).id = function () {
    return true;
  };
  protoOf(JobSupport).jd = function (exception) {
    return false;
  };
  protoOf(JobSupport).ac = function (state) {
  };
  protoOf(JobSupport).gc = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.kd() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).kd = function () {
    return this.ic() + '{' + stateString(this, this.pc()) + '}';
  };
  protoOf(JobSupport).ic = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).ld = function () {
    var state = this.pc();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).md = function () {
    var state = this.pc();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.bc_1;
    return unboxState(state);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.eg_1 = list;
  }
  protoOf(InactiveNodeList).lf = function () {
    return this.eg_1;
  };
  protoOf(InactiveNodeList).wb = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.eg_1.pf('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ch_1 = handler;
  }
  protoOf(InvokeOnCompletion).if = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).jf = function (cause) {
    return this.ch_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.hh_1 = handler;
    this.ih_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).if = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).jf = function (cause) {
    if (this.ih_1.atomicfu$compareAndSet(false, true))
      this.hh_1(cause);
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.og_1 = childJob;
  }
  protoOf(ChildHandleNode).if = function () {
    return true;
  };
  protoOf(ChildHandleNode).jf = function (cause) {
    return this.og_1.bd(this.vf());
  };
  protoOf(ChildHandleNode).cd = function (cause) {
    return this.vf().cd(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.jh_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.jh_1 = state;
  }
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.mh();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).mh = function () {
    var main = Dispatchers_getInstance().rh();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.lh();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).ce = function (context) {
    return false;
  };
  protoOf(Unconfined).de = function (context, block) {
    var yieldContext = context.i6(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.uh_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().e();
    while (_iterator__ex2g4s.f()) {
      var handler = _iterator__ex2g4s.g();
      try {
        handler.le(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.je_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.fe_1 = dispatcher;
    this.ge_1 = continuation;
    this.he_1 = get_UNDEFINED();
    this.ie_1 = threadContextElements(this.b6());
    this.je_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).b6 = function () {
    return this.ge_1.b6();
  };
  protoOf(DispatchedContinuation).vh = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.je_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).ke = function () {
    this.vh();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.yd();
    }
  };
  protoOf(DispatchedContinuation).wh = function () {
    var state = this.he_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.he_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).xh = function () {
    return this;
  };
  protoOf(DispatchedContinuation).g6 = function (result) {
    var state = toState(result);
    if (this.fe_1.ce(this.b6())) {
      this.he_1 = state;
      this.re_1 = 0;
      this.fe_1.de(this.b6(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().af();
        if (false && eventLoop.ve()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.ue()) {
          this.he_1 = state;
          this.re_1 = 0;
          eventLoop.te(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.we(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            this.b6();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.ie_1;
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>.<anonymous>' call
            this.ge_1.g6(result);
            $l$loop: while (eventLoop.qe()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.yh(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.xe(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.fe_1.toString() + ', ' + toDebugString(this.ge_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState(result);
      if (_this__u8e3s4.fe_1.ce(_this__u8e3s4.b6())) {
        _this__u8e3s4.he_1 = state;
        _this__u8e3s4.re_1 = 1;
        _this__u8e3s4.fe_1.de(_this__u8e3s4.b6(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().af();
          if (false && eventLoop.ve()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.ue()) {
            _this__u8e3s4.he_1 = state;
            _this__u8e3s4.re_1 = 1;
            eventLoop.te(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.we(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.b6().i6(Key_instance_2);
                if (!(job == null) && !job.wb()) {
                  var cause = job.tc();
                  _this__u8e3s4.zh(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.g6(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.ge_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.ie_1;
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
                _this__u8e3s4.ge_1.g6(result);
              }
              $l$loop: while (eventLoop.qe()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.yh(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.xe(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.g6(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.re_1 = resumeMode;
  }
  protoOf(DispatchedTask).zh = function (takenState, cause) {
  };
  protoOf(DispatchedTask).ai = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).bi = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.bc_1;
  };
  protoOf(DispatchedTask).se = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.xh();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.ge_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.ie_1;
      // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
      var context = continuation.b6();
      var state = this.wh();
      var exception = this.bi(state);
      var job = exception == null && get_isCancellableMode(this.re_1) ? context.i6(Key_instance_2) : null;
      if (!(job == null) && !job.wb()) {
        var cause = job.tc();
        this.zh(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.g6(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.g6(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.ai(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.g6(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp152_safe_receiver = fatalException;
      if (tmp152_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        this.yh(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).yh = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.xh().b6(), reason);
  };
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function Symbol(symbol) {
    this.ci_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.ci_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.g6(tmp$ret$0);
    throw e;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.b6();
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.g6(tmp$ret$4);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$6 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.g6(tmp$ret$6);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).i7();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).fi = function () {
    process.nextTick(this.mi_1.ki_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.qi();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.ji_1 = dispatcher;
    var tmp = this;
    tmp.ki_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).ri = function () {
    this.ji_1.fi();
  };
  protoOf(ScheduledMessageQueue).si = function () {
    setTimeout(this.ki_1, 0);
  };
  protoOf(ScheduledMessageQueue).ti = function (timeout) {
    setTimeout(this.ki_1, timeout);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.zi_1 && event.data == this$0.aj_1) {
        event.stopPropagation();
        this$0.qi();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.qi();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.zi_1 = window_0;
    this.aj_1 = 'dispatchCoroutine';
    this.zi_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).ri = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).si = function () {
    this.zi_1.postMessage(this.aj_1, '*');
  };
  function promise(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    return asPromise(async(_this__u8e3s4, context, start, block));
  }
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    // Inline function 'kotlin.js.asDynamic' call
    promise.deferred = _this__u8e3s4;
    return promise;
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.ld();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.rd());
      }
      return Unit_instance;
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.wc(asPromise$lambda$lambda($this_asPromise, reject, resolve));
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).de = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).fi = function () {
    this.mi_1.ti(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.mi_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).de = function (context, block) {
    this.mi_1.vi(block);
  };
  function MessageQueue() {
    this.ni_1 = ArrayDeque_init_$Create$();
    this.oi_1 = 16;
    this.pi_1 = false;
  }
  protoOf(MessageQueue).ui = function (element) {
    return this.ni_1.o(element);
  };
  protoOf(MessageQueue).o = function (element) {
    return this.ui((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q2 = function (index) {
    return this.ni_1.q2(index);
  };
  protoOf(MessageQueue).i = function (index) {
    return this.ni_1.i(index);
  };
  protoOf(MessageQueue).q = function () {
    return this.ni_1.q();
  };
  protoOf(MessageQueue).e = function () {
    return this.ni_1.e();
  };
  protoOf(MessageQueue).h = function () {
    return this.ni_1.t8_1;
  };
  protoOf(MessageQueue).vi = function (element) {
    this.ui(element);
    if (!this.pi_1) {
      this.pi_1 = true;
      this.ri();
    }
  };
  protoOf(MessageQueue).qi = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.oi_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.se();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.pi_1 = false;
      } else {
        this.si();
      }
    }
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.ij_1 = window_0;
    this.jj_1 = new WindowMessageQueue(this.ij_1);
  }
  protoOf(WindowDispatcher).de = function (context, block) {
    return this.jj_1.vi(block);
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.vb().q9(context);
    return !(combined === Dispatchers_getInstance().nh_1) && combined.i6(Key_instance) == null ? combined.q9(Dispatchers_getInstance().nh_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.nh_1 = createDefaultDispatcher();
    this.oh_1 = Unconfined_getInstance();
    this.ph_1 = new JsMainDispatcher(this.nh_1, false);
    this.qh_1 = null;
  }
  protoOf(Dispatchers).rh = function () {
    var tmp0_elvis_lhs = this.qh_1;
    return tmp0_elvis_lhs == null ? this.ph_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.lj_1 = delegate;
    this.mj_1 = invokeImmediately;
    this.nj_1 = this.mj_1 ? this : new JsMainDispatcher(this.lj_1, true);
  }
  protoOf(JsMainDispatcher).lh = function () {
    return this.nj_1;
  };
  protoOf(JsMainDispatcher).ce = function (context) {
    return !this.mj_1;
  };
  protoOf(JsMainDispatcher).de = function (context, block) {
    return this.lj_1.de(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.mh();
    return tmp0_elvis_lhs == null ? this.lj_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.oj_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.oj_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.oj_1, this.oj_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.oj_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function LockFreeLinkedListNode() {
    this.qf_1 = this;
    this.rf_1 = this;
    this.sf_1 = false;
  }
  protoOf(LockFreeLinkedListNode).tf = function (node, permissionsBitmask) {
    var prev = this.rf_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.sj_1 & permissionsBitmask) === 0 && prev.tf(node, permissionsBitmask));
    } else {
      node.qf_1 = this;
      node.rf_1 = prev;
      prev.qf_1 = node;
      this.rf_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).uf = function (forbiddenElementsBit) {
    this.tf(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).wf = function () {
    if (this.sf_1)
      return false;
    var prev = this.rf_1;
    var next = this.qf_1;
    prev.qf_1 = next;
    next.rf_1 = prev;
    this.sf_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).xf = function (node) {
    if (!(this.qf_1 === this))
      return false;
    this.tf(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.sj_1 = forbiddenElementsBitmask;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.bf_1 = null;
  }
  protoOf(CommonThreadLocal).cf = function () {
    var tmp = this.bf_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).df = function (value) {
    this.bf_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).q9 = plus;
  protoOf(JobSupport).i6 = get_0;
  protoOf(JobSupport).p9 = fold;
  protoOf(JobSupport).o9 = minusKey_0;
  protoOf(CoroutineDispatcher).i6 = get;
  protoOf(CoroutineDispatcher).o9 = minusKey;
  //endregion
  //region block: init
  Key_instance_1 = new Key_0();
  GlobalScope_instance = new GlobalScope();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = GlobalScope_instance;
  _.$_$.b = CoroutineScope;
  _.$_$.c = promise;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
