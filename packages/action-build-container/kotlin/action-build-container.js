(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Exec, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var protoOf = kotlin_kotlin.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.o2;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.m3;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p1;
  var Exception = kotlin_kotlin.$_$.j3;
  var initMetadataForLambda = kotlin_kotlin.$_$.s2;
  var Companion_getInstance = kotlin_kotlin.$_$.y;
  var to = kotlin_kotlin.$_$.u3;
  var mapOf = kotlin_kotlin.$_$.k1;
  var plus = kotlin_kotlin.$_$.l1;
  var emptyList = kotlin_kotlin.$_$.g1;
  var listOf = kotlin_kotlin.$_$.i1;
  var plus_0 = kotlin_kotlin.$_$.m1;
  var listOf_0 = kotlin_kotlin.$_$.h1;
  var copyToArray = kotlin_kotlin.$_$.f1;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.q2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.t1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.v2;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Enum = kotlin_kotlin.$_$.h3;
  var Collection = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.c3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var split = kotlin_kotlin.$_$.f3;
  var mapCapacity = kotlin_kotlin.$_$.j1;
  var coerceAtLeast = kotlin_kotlin.$_$.y2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.u2;
  var trim = kotlin_kotlin.$_$.g3;
  var toString = kotlin_kotlin.$_$.x2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.p2;
  var hashCode = kotlin_kotlin.$_$.n2;
  var getStringHashCode = kotlin_kotlin.$_$.m2;
  var lines = kotlin_kotlin.$_$.e3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.d3;
  var equals = kotlin_kotlin.$_$.l2;
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
  initMetadataForClass(InputName, 'InputName', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Inputs, 'Inputs');
  initMetadataForClass(OutputName, 'OutputName', VOID, Enum);
  //endregion
  function actionInfo(_this__u8e3s4, $completion) {
    var tmp = new $actionInfoCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  }
  function ActionEnvironment(process) {
    this.gm_1 = process;
    this.hm_1 = 'GITHUB_ACTOR';
    this.im_1 = 'GITHUB_SHA';
    this.jm_1 = 'GITHUB_REPOSITORY';
    this.km_1 = 'GITHUB_RUN_ID';
    this.lm_1 = 'GITHUB_SERVER_URL';
    this.mm_1 = this.sm(this.gm_1, this.hm_1);
    this.nm_1 = this.sm(this.gm_1, this.im_1);
    this.om_1 = this.sm(this.gm_1, this.jm_1);
    this.pm_1 = this.sm(this.gm_1, this.km_1);
    this.qm_1 = this.sm(this.gm_1, this.lm_1);
    this.rm_1 = this.qm_1 + '/' + this.om_1;
  }
  protoOf(ActionEnvironment).sm = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.gm_1.env[key];
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
    return tmp.um(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).en = function ($this$group, $completion) {
    var tmp = this.fn($this$group, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(actionInfo$slambda).b6 = function (p1, $completion) {
    return this.en(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 3;
            this.k5_1 = 2;
            this.j5_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k5_1 = 3;
            this.j5_1 = 4;
            continue $sm;
          case 2:
            this.k5_1 = 3;
            var tmp_0 = this.m5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.m5_1;
              var tmp0_elvis_lhs = exception.message;
              this.dn_1.gn(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.j5_1 = 4;
              continue $sm;
            } else {
              throw this.m5_1;
            }

          case 3:
            throw this.m5_1;
          case 4:
            this.k5_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 3) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).fn = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.dn_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.en($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).en = function ($this$group, $completion) {
    var tmp = this.fn($this$group, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(actionInfo$slambda_1).b6 = function (p1, $completion) {
    return this.en(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 4;
            this.k5_1 = 3;
            this.j5_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k5_1 = 4;
            this.j5_1 = 5;
            continue $sm;
          case 3:
            this.k5_1 = 4;
            var tmp_0 = this.m5_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.m5_1;
              var tmp0_elvis_lhs = exception.message;
              this.pn_1.qn(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.j5_1 = 5;
              continue $sm;
            } else {
              throw this.m5_1;
            }

          case 4:
            throw this.m5_1;
          case 5:
            this.k5_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 4) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).fn = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.pn_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.en($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).en = function ($this$run, $completion) {
    var tmp = this.fn($this$run, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(main$slambda).b6 = function (p1, $completion) {
    return this.en(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 3;
            this.j5_1 = 1;
            suspendResult = actionInfo(this.zn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ao_1 = Companion_getInstance().ib();
            this.zn_1.io(OutputName_IMAGE_ID_getInstance(), this.ao_1.toString());
            this.bo_1 = new ActionEnvironment(node_process_process_dcpv5o);
            this.co_1 = (new Date()).toISOString();
            this.do_1 = mapOf([to('dk.rohdef.actions.runnumber', this.bo_1.pm_1), to('dk.rohdef.actions.builder', 'rohdef build container action'), to('org.opencontainers.image.created', this.co_1), to('org.opencontainers.image.authors', this.bo_1.mm_1), to('org.opencontainers.image.url', this.bo_1.rm_1), to('org.opencontainers.image.documentation', this.bo_1.rm_1), to('org.opencontainers.image.source', this.bo_1.rm_1), to('org.opencontainers.image.version', 'not specified'), to('org.opencontainers.image.revision', this.bo_1.nm_1), to('org.opencontainers.image.vendor', this.bo_1.mm_1), to('org.opencontainers.image.licenses', 'not specified'), to('org.opencontainers.image.ref.name', 'not specified'), to('org.opencontainers.image.title', 'not specified'), to('org.opencontainers.image.description', 'not specified')]);
            this.eo_1 = plus(_Annotations___get_value__impl__3cfnft(this.zn_1.tm_1.jo_1), this.do_1);
            var tmp_0 = this;
            var tmp0 = this.eo_1.z();
            var accumulator = emptyList();
            var _iterator__ex2g4s = tmp0.f();
            while (_iterator__ex2g4s.g()) {
              var element = _iterator__ex2g4s.h();
              var accumulator_0 = accumulator;
              accumulator = plus_0(accumulator_0, listOf(['--annotation', element.v() + '=' + element.w()]));
            }

            tmp_0.fo_1 = accumulator;
            var tmp_1 = this;
            var tmp4 = _BuildArgs___get_value__impl__orzxdu(this.zn_1.tm_1.ko_1).z();
            var accumulator_1 = emptyList();
            var _iterator__ex2g4s_0 = tmp4.f();
            while (_iterator__ex2g4s_0.g()) {
              var element_0 = _iterator__ex2g4s_0.h();
              var accumulator_2 = accumulator_1;
              accumulator_1 = plus_0(accumulator_2, listOf(['--build-arg', element_0.v() + '=' + element_0.w()]));
            }

            tmp_1.go_1 = accumulator_1;
            this.ho_1 = plus_0(plus_0(plus_0(listOf(['build', '-t', this.ao_1.toString()]), this.fo_1), this.go_1), listOf_0(_DockerfilePath___get_value__impl__16f0ic(this.zn_1.tm_1.lo_1)));
            this.j5_1 = 2;
            var tmp_2 = Exec;
            var this_0 = this.ho_1;
            suspendResult = await_0(tmp_2.getExecOutput('docker', copyToArray(this_0)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var dockerBuildOutput = suspendResult;
            if (dockerBuildOutput.exitCode === 0) {
              this.zn_1.qn('Successfully built docker container');
            } else {
              this.zn_1.no('Could not build docker container');
            }

            return Unit_instance;
          case 3:
            throw this.m5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 3) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).fn = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.zn_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.en($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fm_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 3;
            this.j5_1 = 1;
            suspendResult = this.fm_1.oo('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5_1 = 2;
            suspendResult = this.fm_1.oo('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.m5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 3) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.xo_1 = $main;
    this.yo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).ap = function ($this$promise, $completion) {
    var tmp = this.bp($this$promise, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(Core$run$lambda$slambda).b6 = function (p1, $completion) {
    return this.ap((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 2;
            this.j5_1 = 1;
            suspendResult = this.xo_1(this.yo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.m5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 2) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).bp = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.xo_1, this.yo_1, completion);
    i.zo_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ap($this$promise, $completion);
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
    this.kp_1 = $it;
    this.lp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).ap = function ($this$promise, $completion) {
    var tmp = this.bp($this$promise, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(Core$run$slambda).b6 = function (p1, $completion) {
    return this.ap((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 2;
            this.j5_1 = 1;
            suspendResult = this.kp_1(this.lp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.m5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 2) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).bp = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.kp_1, this.lp_1, completion);
    i.mp_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ap($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda_0($it) {
    return function () {
      return $it;
    };
  }
  function Core$inputs$lambda(it) {
    return Core.getInput(it.pp_1);
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.yp_1 = $contents;
    this.zp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).ap = function ($this$promise, $completion) {
    var tmp = this.bp($this$promise, $completion);
    tmp.l5_1 = Unit_instance;
    tmp.m5_1 = null;
    return tmp.r5();
  };
  protoOf(Core$group$lambda$slambda).b6 = function (p1, $completion) {
    return this.ap((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).r5 = function () {
    var suspendResult = this.l5_1;
    $sm: do
      try {
        var tmp = this.j5_1;
        switch (tmp) {
          case 0:
            this.k5_1 = 2;
            this.j5_1 = 1;
            suspendResult = this.yp_1(this.zp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.m5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k5_1 === 2) {
          throw e;
        } else {
          this.j5_1 = this.k5_1;
          this.m5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).bp = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.yp_1, this.zp_1, completion);
    i.aq_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ap($this$promise, $completion);
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
    tmp.tm_1 = tmp_0.bq(Core$inputs$lambda);
  }
  protoOf(Core_0).cq = function (main, post, $completion) {
    var tmp = actionsToolkit;
    var tmp_0 = Core$run$lambda(main, this);
    var tmp_1;
    if (post == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.github.Core.run.<anonymous>' call
      var tmp_2 = GlobalScope_instance;
      tmp_1 = promise(tmp_2, VOID, VOID, Core$run$slambda_0(post, this, null));
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.github.Core.run.<anonymous>' call
      tmp_3 = Core$run$lambda_0(tmp1_safe_receiver);
    }
    return tmp.run(tmp_0, tmp_3, $completion);
  };
  protoOf(Core_0).um = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.cq(main, post, $completion) : $super.cq.call(this, main, post, $completion);
  };
  protoOf(Core_0).oo = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).io = function (name, value) {
    return Core.setOutput(name.fq_1, value);
  };
  protoOf(Core_0).no = function (message) {
    return Core.setFailed(message);
  };
  protoOf(Core_0).qn = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).gn = function (message) {
    return Core.warning(message);
  };
  var InputName_ANNOTATIONS_instance;
  var InputName_DOCKERFILE_instance;
  var InputName_LABELS_instance;
  var InputName_BUILD_ARGS_instance;
  var InputName_entriesInitialized;
  function InputName_initEntries() {
    if (InputName_entriesInitialized)
      return Unit_instance;
    InputName_entriesInitialized = true;
    InputName_ANNOTATIONS_instance = new InputName('ANNOTATIONS', 0, 'annotations');
    InputName_DOCKERFILE_instance = new InputName('DOCKERFILE', 1, 'dockerfile-path');
    InputName_LABELS_instance = new InputName('LABELS', 2, 'labels');
    InputName_BUILD_ARGS_instance = new InputName('BUILD_ARGS', 3, 'build-args');
  }
  function InputName(name, ordinal, actionName) {
    Enum.call(this, name, ordinal);
    this.pp_1 = actionName;
  }
  function InputName_ANNOTATIONS_getInstance() {
    InputName_initEntries();
    return InputName_ANNOTATIONS_instance;
  }
  function InputName_DOCKERFILE_getInstance() {
    InputName_initEntries();
    return InputName_DOCKERFILE_instance;
  }
  function InputName_LABELS_getInstance() {
    InputName_initEntries();
    return InputName_LABELS_instance;
  }
  function InputName_BUILD_ARGS_getInstance() {
    InputName_initEntries();
    return InputName_BUILD_ARGS_instance;
  }
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function _Annotations___get_value__impl__3cfnft($this) {
    return $this;
  }
  function Companion() {
  }
  protoOf(Companion).gq = function (value) {
    var inputList = Companion_instance_3.hq(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.s();
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
        // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
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
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.q(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.n(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.n(1));
      destination_0.r2(pair.r8_1, pair.s8_1);
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
  protoOf(Companion_0).iq = function (value) {
    var inputList = Companion_instance_3.hq(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.s();
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
        // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
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
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.q(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.n(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.n(1));
      destination_0.r2(pair.r8_1, pair.s8_1);
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
  protoOf(Companion_1).jq = function (value) {
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
  protoOf(Companion_2).kq = function (value) {
    var inputList = Companion_instance_3.hq(value);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(inputList, Collection)) {
        tmp = inputList.s();
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
        // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
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
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      var tmp$ret$2 = split(item, ['=']);
      destination.q(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_1 = destination.f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      // Inline function 'dk.rohdef.actions.github.Companion.fromValue.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = element_0.n(0);
      var tmp$ret$5 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(tmp$ret$5, element_0.n(1));
      destination_0.r2(pair.r8_1, pair.s8_1);
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
  protoOf(Companion_3).hq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = lines(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      // Inline function 'dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      destination.q(tmp$ret$1);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.f();
    while (_iterator__ex2g4s_0.g()) {
      var element = _iterator__ex2g4s_0.h();
      // Inline function 'dk.rohdef.actions.github.Companion.toInputList.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination_0.q(element);
      }
    }
    return destination_0;
  };
  protoOf(Companion_3).bq = function (getInput) {
    return new Inputs(Companion_instance.gq(getInput(InputName_ANNOTATIONS_getInstance())), Companion_instance_0.iq(getInput(InputName_BUILD_ARGS_getInstance())), Companion_instance_1.jq(getInput(InputName_DOCKERFILE_getInstance())), Companion_instance_2.kq(getInput(InputName_LABELS_getInstance())));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, buildArgs, dockerfilePath, labels) {
    this.jo_1 = annotations;
    this.ko_1 = buildArgs;
    this.lo_1 = dockerfilePath;
    this.mo_1 = labels;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.jo_1) + ', buildArgs=' + BuildArgs__toString_impl_ox4tm(this.ko_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.lo_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.mo_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.jo_1);
    result = imul(result, 31) + BuildArgs__hashCode_impl_mg31mh(this.ko_1) | 0;
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.lo_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.mo_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.jo_1, tmp0_other_with_cast.jo_1))
      return false;
    if (!equals(this.ko_1, tmp0_other_with_cast.ko_1))
      return false;
    if (!(this.lo_1 === tmp0_other_with_cast.lo_1))
      return false;
    if (!equals(this.mo_1, tmp0_other_with_cast.mo_1))
      return false;
    return true;
  };
  var OutputName_IMAGE_ID_instance;
  var OutputName_DIGEST_instance;
  var OutputName_entriesInitialized;
  function OutputName_initEntries() {
    if (OutputName_entriesInitialized)
      return Unit_instance;
    OutputName_entriesInitialized = true;
    OutputName_IMAGE_ID_instance = new OutputName('IMAGE_ID', 0, 'image-id');
    OutputName_DIGEST_instance = new OutputName('DIGEST', 1, 'digest');
  }
  function OutputName(name, ordinal, actionName) {
    Enum.call(this, name, ordinal);
    this.fq_1 = actionName;
  }
  function OutputName_IMAGE_ID_getInstance() {
    OutputName_initEntries();
    return OutputName_IMAGE_ID_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('node:process'), require('@actions/exec'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=action-build-container.js.map
