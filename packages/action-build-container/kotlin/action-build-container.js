(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@docker/actions-toolkit/lib/github', '@docker/actions-toolkit/lib/docker/docker', '@actions/core', '@docker/actions-toolkit', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['@docker/actions-toolkit/lib/github'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency '@docker/actions-toolkit/lib/github' was not found. Please, check whether '@docker/actions-toolkit/lib/github' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    if (typeof globalThis['@docker/actions-toolkit/lib/docker/docker'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency '@docker/actions-toolkit/lib/docker/docker' was not found. Please, check whether '@docker/actions-toolkit/lib/docker/docker' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    if (typeof Core === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency '@actions/core' was not found. Please, check whether '@actions/core' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    if (typeof actionsToolkit === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency '@docker/actions-toolkit' was not found. Please, check whether '@docker/actions-toolkit' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin.test.actions:action-build-container'.");
    }
    globalThis['kotlin.test.actions:action-build-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-container'], globalThis['@docker/actions-toolkit/lib/github'], globalThis['@docker/actions-toolkit/lib/docker/docker'], Core, actionsToolkit, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.a3;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i1;
  var Exception = kotlin_kotlin.$_$.x2;
  var initMetadataForLambda = kotlin_kotlin.$_$.j2;
  var Companion_getInstance = kotlin_kotlin.$_$.y;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.h2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.m1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.m2;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.f2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g2;
  var toString = kotlin_kotlin.$_$.o2;
  var hashCode = kotlin_kotlin.$_$.e2;
  var getStringHashCode = kotlin_kotlin.$_$.d2;
  var Collection = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.q2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var split = kotlin_kotlin.$_$.t2;
  var mapCapacity = kotlin_kotlin.$_$.f1;
  var coerceAtLeast = kotlin_kotlin.$_$.p2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.l2;
  var trim = kotlin_kotlin.$_$.u2;
  var to = kotlin_kotlin.$_$.i3;
  var lines = kotlin_kotlin.$_$.s2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.r2;
  var equals = kotlin_kotlin.$_$.c2;
  var initMetadataForObject = kotlin_kotlin.$_$.k2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(actionInfo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(actionInfo$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($actionInfoCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(Core$run$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$run$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$group$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Core_0, 'Core', VOID, VOID, VOID, [2]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Inputs, 'Inputs');
  initMetadataForObject(InputNames, 'InputNames');
  //endregion
  function actionInfo(_this__u8e3s4, $completion) {
    var tmp = new $actionInfoCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  }
  function main($completion) {
    var tmp = new Core_0();
    return tmp.fl(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).pl = function ($this$group, $completion) {
    var tmp = this.ql($this$group, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(actionInfo$slambda).d6 = function (p1, $completion) {
    return this.pl(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 3;
            this.m5_1 = 2;
            this.l5_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m5_1 = 3;
            this.l5_1 = 4;
            continue $sm;
          case 2:
            this.m5_1 = 3;
            var tmp_0 = this.o5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.o5_1;
              var tmp0_elvis_lhs = exception.message;
              this.ol_1.rl(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.l5_1 = 4;
              continue $sm;
            } else {
              throw this.o5_1;
            }

          case 3:
            throw this.o5_1;
          case 4:
            this.m5_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 3) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).ql = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.ol_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.pl($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).pl = function ($this$group, $completion) {
    var tmp = this.ql($this$group, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(actionInfo$slambda_1).d6 = function (p1, $completion) {
    return this.pl(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 4;
            this.m5_1 = 3;
            this.l5_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l5_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m5_1 = 4;
            this.l5_1 = 5;
            continue $sm;
          case 3:
            this.m5_1 = 4;
            var tmp_0 = this.o5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.o5_1;
              var tmp0_elvis_lhs = exception.message;
              this.am_1.bm(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.l5_1 = 5;
              continue $sm;
            } else {
              throw this.o5_1;
            }

          case 4:
            throw this.o5_1;
          case 5:
            this.m5_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 4) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).ql = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.am_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.pl($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).pl = function ($this$run, $completion) {
    var tmp = this.ql($this$run, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(main$slambda).d6 = function (p1, $completion) {
    return this.pl(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 2;
            this.l5_1 = 1;
            suspendResult = actionInfo(this.km_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var imageName = Companion_getInstance().bb();
            this.km_1.lm('imageid', 'action: ' + imageName.toString());
            return Unit_instance;
          case 2:
            throw this.o5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 2) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).ql = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.km_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.pl($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dl_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 3;
            this.l5_1 = 1;
            suspendResult = this.dl_1.mm('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l5_1 = 2;
            suspendResult = this.dl_1.mm('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 3) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.vm_1 = $main;
    this.wm_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).ym = function ($this$promise, $completion) {
    var tmp = this.zm($this$promise, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(Core$run$lambda$slambda).d6 = function (p1, $completion) {
    return this.ym((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 2;
            this.l5_1 = 1;
            suspendResult = this.vm_1(this.wm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 2) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).zm = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.vm_1, this.wm_1, completion);
    i.xm_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ym($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda($main, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$run$lambda$slambda_0($main, this$0, null));
    };
  }
  function Core$run$slambda($it, this$0, resultContinuation) {
    this.in_1 = $it;
    this.jn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).ym = function ($this$promise, $completion) {
    var tmp = this.zm($this$promise, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(Core$run$slambda).d6 = function (p1, $completion) {
    return this.ym((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 2;
            this.l5_1 = 1;
            suspendResult = this.in_1(this.jn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 2) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).zm = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.in_1, this.jn_1, completion);
    i.kn_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ym($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda_0($it) {
    return function () {
      return $it;
    };
  }
  function Core$getInput$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.getInput(p0);
    };
    l.callableName = 'getInput';
    return l;
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.tn_1 = $contents;
    this.un_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).ym = function ($this$promise, $completion) {
    var tmp = this.zm($this$promise, $completion);
    tmp.n5_1 = Unit_instance;
    tmp.o5_1 = null;
    return tmp.t5();
  };
  protoOf(Core$group$lambda$slambda).d6 = function (p1, $completion) {
    return this.ym((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).t5 = function () {
    var suspendResult = this.n5_1;
    $sm: do
      try {
        var tmp = this.l5_1;
        switch (tmp) {
          case 0:
            this.m5_1 = 2;
            this.l5_1 = 1;
            suspendResult = this.tn_1(this.un_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m5_1 === 2) {
          throw e;
        } else {
          this.l5_1 = this.m5_1;
          this.o5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).zm = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.tn_1, this.un_1, completion);
    i.vn_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ym($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$group$lambda($contents, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$group$lambda$slambda_0($contents, this$0, null));
    };
  }
  function Core_0() {
    var tmp = this;
    var tmp_0 = Companion_instance_3;
    tmp.el_1 = tmp_0.wn(Core$getInput$ref(Core));
  }
  protoOf(Core_0).xn = function (main, post, $completion) {
    var tmp = actionsToolkit;
    var tmp_0 = Core$run$lambda(main, this);
    var tmp_1;
    if (post == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Core.run.<anonymous>' call
      var tmp_2 = GlobalScope_instance;
      tmp_1 = promise(tmp_2, VOID, VOID, Core$run$slambda_0(post, this, null));
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Core.run.<anonymous>' call
      tmp_3 = Core$run$lambda_0(tmp1_safe_receiver);
    }
    return tmp.run(tmp_0, tmp_3, $completion);
  };
  protoOf(Core_0).fl = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.xn(main, post, $completion) : $super.xn.call(this, main, post, $completion);
  };
  protoOf(Core_0).mm = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).lm = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).bm = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).rl = function (message) {
    return Core.warning(message);
  };
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function Companion() {
  }
  protoOf(Companion).yn = function (value) {
    return _Annotations___init__impl__gg5cff(Companion_instance_3.zn(value));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Annotations__toString_impl_tawfwj($this) {
    return 'Annotations(value=' + toString($this) + ')';
  }
  function Annotations__hashCode_impl_jz1p9q($this) {
    return hashCode($this);
  }
  function _DockerfilePath___init__impl__w2j3a8(value) {
    return value;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).ao = function (value) {
    return _DockerfilePath___init__impl__w2j3a8(value);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function DockerfilePath__toString_impl_moci74($this) {
    return 'DockerfilePath(value=' + $this + ')';
  }
  function DockerfilePath__hashCode_impl_qllmz5($this) {
    return getStringHashCode($this);
  }
  function _Labels___init__impl__usgt1a(value) {
    return value;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).bo = function (value) {
    return _Labels___init__impl__usgt1a(Companion_instance_3.zn(value));
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Labels__toString_impl_hmv2m6($this) {
    return 'Labels(value=' + toString($this) + ')';
  }
  function Labels__hashCode_impl_vn32k3($this) {
    return hashCode($this);
  }
  function _Secrets___init__impl__ogbj3q(value) {
    return value;
  }
  function _Secrets___get_value__impl__50tkyy($this) {
    return $this;
  }
  function Secrets__toString_impl_fjs7pe($this) {
    return toString(_Secrets___get_value__impl__50tkyy($this).x());
  }
  function Companion_2() {
  }
  protoOf(Companion_2).co = function (value) {
    var inputList = Companion_instance_3.zn(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = inputList.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
        if (!contains(element, '=')) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (!tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$("All secrets must be key-value-pairs separated by '=', a value was found that does not follow this");
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(inputList, 10));
    var _iterator__ex2g4s_0 = inputList.e();
    while (_iterator__ex2g4s_0.f()) {
      var item = _iterator__ex2g4s_0.g();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.o(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.e();
    while (_iterator__ex2g4s_1.f()) {
      var element_0 = _iterator__ex2g4s_1.g();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.i(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.i(1));
      destination_0.r2(pair.ea_1, pair.fa_1);
    }
    var secrets = destination_0;
    return _Secrets___init__impl__ogbj3q(secrets);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Secrets__hashCode_impl_xq5xgv($this) {
    return hashCode($this);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).zn = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = lines(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      destination.o(tmp$ret$1);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.e();
    while (_iterator__ex2g4s_0.f()) {
      var element = _iterator__ex2g4s_0.g();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination_0.o(element);
      }
    }
    return destination_0;
  };
  protoOf(Companion_3).wn = function (getInput) {
    return new Inputs(Companion_instance.yn(getInput(InputNames_instance.do_1)), Companion_instance_0.ao(getInput(InputNames_instance.eo_1)), Companion_instance_1.bo(getInput(InputNames_instance.fo_1)), Companion_instance_2.co(getInput(InputNames_instance.go_1)));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, dockerfilePath, labels, secrets) {
    this.ho_1 = annotations;
    this.io_1 = dockerfilePath;
    this.jo_1 = labels;
    this.ko_1 = secrets;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.ho_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.io_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.jo_1) + ', secrets=' + Secrets__toString_impl_fjs7pe(this.ko_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.ho_1);
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.io_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.jo_1) | 0;
    result = imul(result, 31) + Secrets__hashCode_impl_xq5xgv(this.ko_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.ho_1, tmp0_other_with_cast.ho_1))
      return false;
    if (!(this.io_1 === tmp0_other_with_cast.io_1))
      return false;
    if (!equals(this.jo_1, tmp0_other_with_cast.jo_1))
      return false;
    if (!equals(this.ko_1, tmp0_other_with_cast.ko_1))
      return false;
    return true;
  };
  function InputNames() {
    this.do_1 = 'annotations';
    this.eo_1 = 'dockerfile-path';
    this.fo_1 = 'labels';
    this.go_1 = 'secrets';
  }
  var InputNames_instance;
  function InputNames_getInstance() {
    return InputNames_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  InputNames_instance = new InputNames();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=action-build-container.js.map
