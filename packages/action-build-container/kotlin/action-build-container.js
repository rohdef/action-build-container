(function (_, node_process_process_dcpv5o, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var protoOf = kotlin_kotlin.$_$.r2;
  var initMetadataForClass = kotlin_kotlin.$_$.k2;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.b2;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.i3;
  var Companion_getInstance = kotlin_kotlin.$_$.y;
  var to = kotlin_kotlin.$_$.q3;
  var mapOf = kotlin_kotlin.$_$.h1;
  var plus = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var joinToString = kotlin_kotlin.$_$.f1;
  var trimMargin = kotlin_kotlin.$_$.b3;
  var lines = kotlin_kotlin.$_$.z2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.y2;
  var initMetadataForLambda = kotlin_kotlin.$_$.n2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.p1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.q2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.x2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e1;
  var split = kotlin_kotlin.$_$.a3;
  var mapCapacity = kotlin_kotlin.$_$.g1;
  var coerceAtLeast = kotlin_kotlin.$_$.t2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.p2;
  var trim = kotlin_kotlin.$_$.c3;
  var toString = kotlin_kotlin.$_$.s2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l2;
  var hashCode = kotlin_kotlin.$_$.j2;
  var getStringHashCode = kotlin_kotlin.$_$.i2;
  var equals = kotlin_kotlin.$_$.h2;
  var initMetadataForObject = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ActionEnvironment, 'ActionEnvironment');
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$run$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$run$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Core_0, 'Core', VOID, VOID, VOID, [2]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Inputs, 'Inputs');
  initMetadataForObject(InputNames, 'InputNames');
  //endregion
  function ActionEnvironment(process) {
    this.ul_1 = process;
    this.vl_1 = 'GITHUB_ACTOR';
    this.wl_1 = 'GITHUB_SHA';
    this.xl_1 = 'GITHUB_REPOSITORY';
    this.yl_1 = 'GITHUB_RUN_ID';
    this.zl_1 = 'GITHUB_SERVER_URL';
    this.am_1 = this.gm(this.ul_1, this.vl_1);
    this.bm_1 = this.gm(this.ul_1, this.wl_1);
    this.cm_1 = this.gm(this.ul_1, this.xl_1);
    this.dm_1 = this.gm(this.ul_1, this.yl_1);
    this.em_1 = this.gm(this.ul_1, this.zl_1);
    this.fm_1 = this.em_1 + '/' + this.cm_1;
  }
  protoOf(ActionEnvironment).gm = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.ul_1.env[key];
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
    return tmp.im(main$slambda_0(null), VOID, $completion);
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).sm = function ($this$run, $completion) {
    var tmp = this.tm($this$run, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(main$slambda).z5 = function (p1, $completion) {
    return this.sm(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).p5 = function () {
    var suspendResult = this.j5_1;
    $sm: do
      try {
        var tmp = this.h5_1;
        if (tmp === 0) {
          this.i5_1 = 1;
          var imageName = Companion_getInstance().gb();
          this.rm_1.um('imageid', 'action: ' + imageName.toString());
          var actionEnvironment = new ActionEnvironment(node_process_process_dcpv5o);
          var date = (new Date()).toISOString();
          var defaultAnnotation = mapOf([to('dk.rohdef.actions.runnumber', actionEnvironment.dm_1), to('dk.rohdef.actions.builder', 'rohdef build container action'), to('org.opencontainers.image.created', date), to('org.opencontainers.image.authors', actionEnvironment.am_1), to('org.opencontainers.image.url', actionEnvironment.fm_1), to('org.opencontainers.image.documentation', actionEnvironment.fm_1), to('org.opencontainers.image.source', actionEnvironment.fm_1), to('org.opencontainers.image.version', 'not specified'), to('org.opencontainers.image.revision', actionEnvironment.bm_1), to('org.opencontainers.image.vendor', actionEnvironment.am_1), to('org.opencontainers.image.licenses', 'not specified'), to('org.opencontainers.image.ref.name', 'not specified'), to('org.opencontainers.image.title', 'not specified'), to('org.opencontainers.image.description', 'not specified')]);
          var annotations = plus(defaultAnnotation, _Annotations___get_value__impl__3cfnft(this.rm_1.hm_1.vm_1));
          var destination = ArrayList_init_$Create$(annotations.i());
          var _iterator__ex2g4s = annotations.y().f();
          while (_iterator__ex2g4s.g()) {
            var item = _iterator__ex2g4s.h();
            destination.p('    --annotation ' + item.u() + '=' + item.v() + ' \\');
          }
          var annotationBuildCommand = joinToString(destination, '\n');
          var this_0 = _BuildArgs___get_value__impl__orzxdu(this.rm_1.hm_1.wm_1);
          var destination_0 = ArrayList_init_$Create$(this_0.i());
          var _iterator__ex2g4s_0 = this_0.y().f();
          while (_iterator__ex2g4s_0.g()) {
            var item_0 = _iterator__ex2g4s_0.h();
            destination_0.p('    --build-arg ' + item_0.u() + '=' + item_0.v() + ' \\');
          }
          var buildArgsCommand = joinToString(destination_0, '\n');
          var commandRaw = trimMargin('\n                |docker build \\\n                |' + annotationBuildCommand + '\n                |' + buildArgsCommand + '\n                |    ' + _DockerfilePath___get_value__impl__16f0ic(this.rm_1.hm_1.xm_1) + '\n            ');
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
          this.rm_1.zm('Running the following docker build command:\n' + command);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k5_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda).tm = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.rm_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.sm($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.in_1 = $main;
    this.jn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).ln = function ($this$promise, $completion) {
    var tmp = this.mn($this$promise, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(Core$run$lambda$slambda).z5 = function (p1, $completion) {
    return this.ln((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.in_1(this.jn_1, this);
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
  protoOf(Core$run$lambda$slambda).mn = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.in_1, this.jn_1, completion);
    i.kn_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ln($this$promise, $completion);
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
    this.vn_1 = $it;
    this.wn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).ln = function ($this$promise, $completion) {
    var tmp = this.mn($this$promise, $completion);
    tmp.j5_1 = Unit_instance;
    tmp.k5_1 = null;
    return tmp.p5();
  };
  protoOf(Core$run$slambda).z5 = function (p1, $completion) {
    return this.ln((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.vn_1(this.wn_1, this);
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
  protoOf(Core$run$slambda).mn = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.vn_1, this.wn_1, completion);
    i.xn_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ln($this$promise, $completion);
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
  function Core_0() {
    var tmp = this;
    var tmp_0 = Companion_instance_3;
    tmp.hm_1 = tmp_0.yn(Core$getInput$ref(Core));
  }
  protoOf(Core_0).zn = function (main, post, $completion) {
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
  protoOf(Core_0).im = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.zn(main, post, $completion) : $super.zn.call(this, main, post, $completion);
  };
  protoOf(Core_0).um = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).zm = function (message) {
    return Core.info(message);
  };
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function _Annotations___get_value__impl__3cfnft($this) {
    return $this;
  }
  function Companion() {
  }
  protoOf(Companion).ao = function (value) {
    var inputList = Companion_instance_3.bo(value);
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
  protoOf(Companion_0).co = function (value) {
    var inputList = Companion_instance_3.bo(value);
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
  protoOf(Companion_1).do = function (value) {
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
  protoOf(Companion_2).eo = function (value) {
    var inputList = Companion_instance_3.bo(value);
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
  protoOf(Companion_3).bo = function (_this__u8e3s4) {
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
  protoOf(Companion_3).yn = function (getInput) {
    return new Inputs(Companion_instance.ao(getInput(InputNames_instance.fo_1)), Companion_instance_0.co(getInput(InputNames_instance.io_1)), Companion_instance_1.do(getInput(InputNames_instance.go_1)), Companion_instance_2.eo(getInput(InputNames_instance.ho_1)));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, buildArgs, dockerfilePath, labels) {
    this.vm_1 = annotations;
    this.wm_1 = buildArgs;
    this.xm_1 = dockerfilePath;
    this.ym_1 = labels;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.vm_1) + ', buildArgs=' + BuildArgs__toString_impl_ox4tm(this.wm_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.xm_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.ym_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.vm_1);
    result = imul(result, 31) + BuildArgs__hashCode_impl_mg31mh(this.wm_1) | 0;
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.xm_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.ym_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.vm_1, tmp0_other_with_cast.vm_1))
      return false;
    if (!equals(this.wm_1, tmp0_other_with_cast.wm_1))
      return false;
    if (!(this.xm_1 === tmp0_other_with_cast.xm_1))
      return false;
    if (!equals(this.ym_1, tmp0_other_with_cast.ym_1))
      return false;
    return true;
  };
  function InputNames() {
    this.fo_1 = 'annotations';
    this.go_1 = 'dockerfile-path';
    this.ho_1 = 'labels';
    this.io_1 = 'build-args';
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
}(module.exports, require('node:process'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=action-build-container.js.map
