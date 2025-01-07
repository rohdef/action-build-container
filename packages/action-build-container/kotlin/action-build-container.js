(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var protoOf = kotlin_kotlin.$_$.s2;
  var initMetadataForClass = kotlin_kotlin.$_$.k2;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.b2;
  var THROW_CCE = kotlin_kotlin.$_$.j3;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l1;
  var Exception = kotlin_kotlin.$_$.g3;
  var initMetadataForLambda = kotlin_kotlin.$_$.o2;
  var Companion_getInstance = kotlin_kotlin.$_$.y;
  var to = kotlin_kotlin.$_$.r3;
  var mapOf = kotlin_kotlin.$_$.h1;
  var plus = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var joinToString = kotlin_kotlin.$_$.f1;
  var trimMargin = kotlin_kotlin.$_$.c3;
  var lines = kotlin_kotlin.$_$.a3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.z2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.m2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.p1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.r2;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Collection = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.y2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e1;
  var split = kotlin_kotlin.$_$.b3;
  var mapCapacity = kotlin_kotlin.$_$.g1;
  var coerceAtLeast = kotlin_kotlin.$_$.u2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.q2;
  var trim = kotlin_kotlin.$_$.d3;
  var toString = kotlin_kotlin.$_$.t2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l2;
  var hashCode = kotlin_kotlin.$_$.j2;
  var getStringHashCode = kotlin_kotlin.$_$.i2;
  var equals = kotlin_kotlin.$_$.h2;
  var initMetadataForObject = kotlin_kotlin.$_$.p2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ActionEnvironment, 'ActionEnvironment');
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
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  }
  function ActionEnvironment(process) {
    this.dm_1 = process;
    this.em_1 = 'GITHUB_ACTOR';
    this.fm_1 = 'GITHUB_SHA';
    this.gm_1 = 'GITHUB_REPOSITORY';
    this.hm_1 = 'GITHUB_RUN_ID';
    this.im_1 = 'GITHUB_SERVER_URL';
    this.jm_1 = this.pm(this.dm_1, this.em_1);
    this.km_1 = this.pm(this.dm_1, this.fm_1);
    this.lm_1 = this.pm(this.dm_1, this.gm_1);
    this.mm_1 = this.pm(this.dm_1, this.hm_1);
    this.nm_1 = this.pm(this.dm_1, this.im_1);
    this.om_1 = this.nm_1 + '/' + this.lm_1;
  }
  protoOf(ActionEnvironment).pm = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.dm_1.env[key];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(key + ' environment variable is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function main($completion) {
    var tmp = new Core_0();
    return tmp.rm(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).bn = function ($this$group, $completion) {
    var tmp = this.cn($this$group, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(actionInfo$slambda).z5 = function (p1, $completion) {
    return this.bn(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 3;
            this.i5_1 = 2;
            this.h5_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i5_1 = 3;
            this.h5_1 = 4;
            continue $sm;
          case 2:
            this.i5_1 = 3;
            var tmp_0 = this.k5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.k5_1;
              var tmp0_elvis_lhs = exception.message;
              this.an_1.dn(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.h5_1 = 4;
              continue $sm;
            } else {
              throw this.k5_1;
            }

          case 3:
            throw this.k5_1;
          case 4:
            this.i5_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 3) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).cn = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.an_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.bn($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).bn = function ($this$group, $completion) {
    var tmp = this.cn($this$group, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(actionInfo$slambda_1).z5 = function (p1, $completion) {
    return this.bn(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 4;
            this.i5_1 = 3;
            this.h5_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h5_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i5_1 = 4;
            this.h5_1 = 5;
            continue $sm;
          case 3:
            this.i5_1 = 4;
            var tmp_0 = this.k5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.k5_1;
              var tmp0_elvis_lhs = exception.message;
              this.mn_1.nn(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.h5_1 = 5;
              continue $sm;
            } else {
              throw this.k5_1;
            }

          case 4:
            throw this.k5_1;
          case 5:
            this.i5_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 4) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).cn = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.mn_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.bn($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).bn = function ($this$run, $completion) {
    var tmp = this.cn($this$run, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(main$slambda).z5 = function (p1, $completion) {
    return this.bn(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 2;
            this.h5_1 = 1;
            suspendResult = actionInfo(this.wn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var imageName = Companion_getInstance().gb();
            this.wn_1.xn('imageid', 'action: ' + imageName.toString());
            var actionEnvironment = new ActionEnvironment(node_process_process_dcpv5o);
            var date = (new Date()).toISOString();
            var defaultAnnotation = mapOf([to('dk.rohdef.actions.runnumber', actionEnvironment.mm_1), to('dk.rohdef.actions.builder', 'rohdef build container action'), to('org.opencontainers.image.created', date), to('org.opencontainers.image.authors', actionEnvironment.jm_1), to('org.opencontainers.image.url', actionEnvironment.om_1), to('org.opencontainers.image.documentation', actionEnvironment.om_1), to('org.opencontainers.image.source', actionEnvironment.om_1), to('org.opencontainers.image.version', 'not specified'), to('org.opencontainers.image.revision', actionEnvironment.km_1), to('org.opencontainers.image.vendor', actionEnvironment.jm_1), to('org.opencontainers.image.licenses', 'not specified'), to('org.opencontainers.image.ref.name', 'not specified'), to('org.opencontainers.image.title', 'not specified'), to('org.opencontainers.image.description', 'not specified')]);
            var annotations = plus(defaultAnnotation, _Annotations___get_value__impl__3cfnft(this.wn_1.qm_1.yn_1));
            var destination = ArrayList_init_$Create$(annotations.i());
            var _iterator__ex2g4s = annotations.y().f();
            while (_iterator__ex2g4s.g()) {
              var item = _iterator__ex2g4s.h();
              destination.p('    --annotation ' + item.u() + '=' + item.v() + ' \\');
            }

            var annotationBuildCommand = joinToString(destination, '\n');
            var this_0 = _BuildArgs___get_value__impl__orzxdu(this.wn_1.qm_1.zn_1);
            var destination_0 = ArrayList_init_$Create$(this_0.i());
            var _iterator__ex2g4s_0 = this_0.y().f();
            while (_iterator__ex2g4s_0.g()) {
              var item_0 = _iterator__ex2g4s_0.h();
              destination_0.p('    --build-arg ' + item_0.u() + '=' + item_0.v() + ' \\');
            }

            var buildArgsCommand = joinToString(destination_0, '\n');
            var commandRaw = trimMargin('\n                |docker build \\\n                |' + annotationBuildCommand + '\n                |' + buildArgsCommand + '\n                |    --tag ' + imageName.toString() + ' \\\n                |    ' + _DockerfilePath___get_value__impl__16f0ic(this.wn_1.qm_1.ao_1) + '\n            ');
            var tmp0 = lines(commandRaw);
            var destination_1 = ArrayList_init_$Create$_0();
            var _iterator__ex2g4s_1 = tmp0.f();
            while (_iterator__ex2g4s_1.g()) {
              var element = _iterator__ex2g4s_1.h();
              if (!isBlank(element)) {
                destination_1.p(element);
              }
            }

            var command = joinToString(destination_1, '\n');
            this.wn_1.nn('Running the following docker build command:\n' + command);
            return Unit_instance;
          case 2:
            throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 2) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).cn = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.wn_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.bn($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cm_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 3;
            this.h5_1 = 1;
            suspendResult = this.cm_1.co('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h5_1 = 2;
            suspendResult = this.cm_1.co('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 3) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.lo_1 = $main;
    this.mo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).oo = function ($this$promise, $completion) {
    var tmp = this.po($this$promise, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(Core$run$lambda$slambda).z5 = function (p1, $completion) {
    return this.oo((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 2;
            this.h5_1 = 1;
            suspendResult = this.lo_1(this.mo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 2) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).po = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.lo_1, this.mo_1, completion);
    i.no_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.oo($this$promise, $completion);
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
    this.yo_1 = $it;
    this.zo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).oo = function ($this$promise, $completion) {
    var tmp = this.po($this$promise, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(Core$run$slambda).z5 = function (p1, $completion) {
    return this.oo((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 2;
            this.h5_1 = 1;
            suspendResult = this.yo_1(this.zo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 2) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).po = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.yo_1, this.zo_1, completion);
    i.ap_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.oo($this$promise, $completion);
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
    this.jp_1 = $contents;
    this.kp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).oo = function ($this$promise, $completion) {
    var tmp = this.po($this$promise, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(Core$group$lambda$slambda).z5 = function (p1, $completion) {
    return this.oo((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        switch (tmp) {
          case 0:
            this.i5_1 = 2;
            this.h5_1 = 1;
            suspendResult = this.jp_1(this.kp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i5_1 === 2) {
          throw e;
        } else {
          this.h5_1 = this.i5_1;
          this.k5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).po = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.jp_1, this.kp_1, completion);
    i.lp_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.oo($this$promise, $completion);
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
    tmp.qm_1 = tmp_0.mp(Core$getInput$ref(Core));
  }
  protoOf(Core_0).np = function (main, post, $completion) {
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
  protoOf(Core_0).rm = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.np(main, post, $completion) : $super.np.call(this, main, post, $completion);
  };
  protoOf(Core_0).co = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).xn = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).nn = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).dn = function (message) {
    return Core.warning(message);
  };
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function _Annotations___get_value__impl__3cfnft($this) {
    return $this;
  }
  function Companion() {
  }
  protoOf(Companion).op = function (value) {
    var inputList = Companion_instance_3.pp(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = inputList.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
        if (!contains(element, '=')) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (!tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$("All annotations must be key-value-pairs separated by '=', a value was found that does not follow this");
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(inputList, 10));
    var _iterator__ex2g4s_0 = inputList.f();
    while (_iterator__ex2g4s_0.g()) {
      var item = _iterator__ex2g4s_0.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.p(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.j(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.j(1));
      destination_0.q2(pair.p8_1, pair.q8_1);
    }
    var annotations = destination_0;
    return _Annotations___init__impl__gg5cff(annotations);
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
  function _BuildArgs___init__impl__2l6alu(value) {
    return value;
  }
  function _BuildArgs___get_value__impl__orzxdu($this) {
    return $this;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).qp = function (value) {
    var inputList = Companion_instance_3.pp(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = inputList.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
        if (!contains(element, '=')) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (!tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$("All build args must be key-value-pairs separated by '=', a value was found that does not follow this");
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(inputList, 10));
    var _iterator__ex2g4s_0 = inputList.f();
    while (_iterator__ex2g4s_0.g()) {
      var item = _iterator__ex2g4s_0.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.p(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.j(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.j(1));
      destination_0.q2(pair.p8_1, pair.q8_1);
    }
    var buildArgs = destination_0;
    return _BuildArgs___init__impl__2l6alu(buildArgs);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function BuildArgs__toString_impl_ox4tm($this) {
    return 'BuildArgs(value=' + toString($this) + ')';
  }
  function BuildArgs__hashCode_impl_mg31mh($this) {
    return hashCode($this);
  }
  function _DockerfilePath___init__impl__w2j3a8(value) {
    return value;
  }
  function _DockerfilePath___get_value__impl__16f0ic($this) {
    return $this;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).rp = function (value) {
    return _DockerfilePath___init__impl__w2j3a8(value);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
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
  function Companion_2() {
  }
  protoOf(Companion_2).sp = function (value) {
    var inputList = Companion_instance_3.pp(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = inputList.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
        if (!contains(element, '=')) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (!tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$("All labels must be key-value-pairs separated by '=', a value was found that does not follow this");
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(inputList, 10));
    var _iterator__ex2g4s_0 = inputList.f();
    while (_iterator__ex2g4s_0.g()) {
      var item = _iterator__ex2g4s_0.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.p(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.j(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.j(1));
      destination_0.q2(pair.p8_1, pair.q8_1);
    }
    var labels = destination_0;
    return _Labels___init__impl__usgt1a(labels);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Labels__toString_impl_hmv2m6($this) {
    return 'Labels(value=' + toString($this) + ')';
  }
  function Labels__hashCode_impl_vn32k3($this) {
    return hashCode($this);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).pp = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = lines(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      destination.p(tmp$ret$1);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.f();
    while (_iterator__ex2g4s_0.g()) {
      var element = _iterator__ex2g4s_0.h();
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination_0.p(element);
      }
    }
    return destination_0;
  };
  protoOf(Companion_3).mp = function (getInput) {
    return new Inputs(Companion_instance.op(getInput(InputNames_instance.tp_1)), Companion_instance_0.qp(getInput(InputNames_instance.wp_1)), Companion_instance_1.rp(getInput(InputNames_instance.up_1)), Companion_instance_2.sp(getInput(InputNames_instance.vp_1)));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, buildArgs, dockerfilePath, labels) {
    this.yn_1 = annotations;
    this.zn_1 = buildArgs;
    this.ao_1 = dockerfilePath;
    this.bo_1 = labels;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.yn_1) + ', buildArgs=' + BuildArgs__toString_impl_ox4tm(this.zn_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.ao_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.bo_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.yn_1);
    result = imul(result, 31) + BuildArgs__hashCode_impl_mg31mh(this.zn_1) | 0;
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.ao_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.bo_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.yn_1, tmp0_other_with_cast.yn_1))
      return false;
    if (!equals(this.zn_1, tmp0_other_with_cast.zn_1))
      return false;
    if (!(this.ao_1 === tmp0_other_with_cast.ao_1))
      return false;
    if (!equals(this.bo_1, tmp0_other_with_cast.bo_1))
      return false;
    return true;
  };
  function InputNames() {
    this.tp_1 = 'annotations';
    this.up_1 = 'dockerfile-path';
    this.vp_1 = 'labels';
    this.wp_1 = 'build-args';
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
}(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('node:process'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=action-build-container.js.map
