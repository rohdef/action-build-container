(function (_, node_process_process_dcpv5o, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var protoOf = kotlin_kotlin.$_$.q2;
  var initMetadataForClass = kotlin_kotlin.$_$.j2;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.g3;
  var Companion_getInstance = kotlin_kotlin.$_$.y;
  var to = kotlin_kotlin.$_$.o3;
  var mapOf = kotlin_kotlin.$_$.g1;
  var plus = kotlin_kotlin.$_$.h1;
  var toString = kotlin_kotlin.$_$.r2;
  var initMetadataForLambda = kotlin_kotlin.$_$.m2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.o1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.p2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.i2;
  var getStringHashCode = kotlin_kotlin.$_$.h2;
  var Collection = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.w2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var split = kotlin_kotlin.$_$.z2;
  var mapCapacity = kotlin_kotlin.$_$.f1;
  var coerceAtLeast = kotlin_kotlin.$_$.s2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.o2;
  var trim = kotlin_kotlin.$_$.a3;
  var lines = kotlin_kotlin.$_$.y2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.x2;
  var equals = kotlin_kotlin.$_$.g2;
  var initMetadataForObject = kotlin_kotlin.$_$.n2;
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
    this.cm_1 = process;
    this.dm_1 = 'GITHUB_ACTOR';
    this.em_1 = 'GITHUB_SHA';
    this.fm_1 = 'GITHUB_REPOSITORY';
    this.gm_1 = 'GITHUB_RUN_ID';
    this.hm_1 = 'GITHUB_SERVER_URL';
    this.im_1 = this.om(this.cm_1, this.dm_1);
    this.jm_1 = this.om(this.cm_1, this.em_1);
    this.km_1 = this.om(this.cm_1, this.fm_1);
    this.lm_1 = this.om(this.cm_1, this.gm_1);
    this.mm_1 = this.om(this.cm_1, this.hm_1);
    this.nm_1 = this.mm_1 + '/' + this.km_1;
  }
  protoOf(ActionEnvironment).om = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.cm_1.env[key];
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
    return tmp.qm(main$slambda_0(null), VOID, $completion);
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).an = function ($this$run, $completion) {
    var tmp = this.bn($this$run, $completion);
    tmp.p5_1 = Unit_instance;
    tmp.q5_1 = null;
    return tmp.v5();
  };
  protoOf(main$slambda).f6 = function (p1, $completion) {
    return this.an(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).v5 = function () {
    var suspendResult = this.p5_1;
    $sm: do
      try {
        var tmp = this.n5_1;
        if (tmp === 0) {
          this.o5_1 = 1;
          var imageName = Companion_getInstance().ob();
          this.zm_1.cn('imageid', 'action: ' + imageName.toString());
          var actionEnvironment = new ActionEnvironment(node_process_process_dcpv5o);
          var date = (new Date()).toISOString();
          var defaultLabels = mapOf([to('runnumber', actionEnvironment.lm_1), to('org.opencontainers.image.created', date), to('org.opencontainers.image.authors', actionEnvironment.im_1), to('org.opencontainers.image.url', actionEnvironment.nm_1), to('org.opencontainers.image.documentation', actionEnvironment.nm_1), to('org.opencontainers.image.source', actionEnvironment.nm_1), to('org.opencontainers.image.version', 'not specified'), to('org.opencontainers.image.revision', actionEnvironment.jm_1), to('org.opencontainers.image.vendor', actionEnvironment.im_1), to('org.opencontainers.image.licenses', 'not specified'), to('org.opencontainers.image.ref.name', 'not specified'), to('org.opencontainers.image.title', 'not specified'), to('org.opencontainers.image.description', 'not specified')]);
          var labels = plus(defaultLabels, _Labels___get_value__impl__v31say(this.zm_1.pm_1.fn_1));
          this.zm_1.hn('lbls: ' + toString(labels));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q5_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda).bn = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.zm_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.an($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.qn_1 = $main;
    this.rn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).tn = function ($this$promise, $completion) {
    var tmp = this.un($this$promise, $completion);
    tmp.p5_1 = Unit_instance;
    tmp.q5_1 = null;
    return tmp.v5();
  };
  protoOf(Core$run$lambda$slambda).f6 = function (p1, $completion) {
    return this.tn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).v5 = function () {
    var suspendResult = this.p5_1;
    $sm: do
      try {
        var tmp = this.n5_1;
        switch (tmp) {
          case 0:
            this.o5_1 = 2;
            this.n5_1 = 1;
            suspendResult = this.qn_1(this.rn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o5_1 === 2) {
          throw e;
        } else {
          this.n5_1 = this.o5_1;
          this.q5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).un = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.qn_1, this.rn_1, completion);
    i.sn_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.tn($this$promise, $completion);
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
    this.do_1 = $it;
    this.eo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).tn = function ($this$promise, $completion) {
    var tmp = this.un($this$promise, $completion);
    tmp.p5_1 = Unit_instance;
    tmp.q5_1 = null;
    return tmp.v5();
  };
  protoOf(Core$run$slambda).f6 = function (p1, $completion) {
    return this.tn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).v5 = function () {
    var suspendResult = this.p5_1;
    $sm: do
      try {
        var tmp = this.n5_1;
        switch (tmp) {
          case 0:
            this.o5_1 = 2;
            this.n5_1 = 1;
            suspendResult = this.do_1(this.eo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o5_1 === 2) {
          throw e;
        } else {
          this.n5_1 = this.o5_1;
          this.q5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).un = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.do_1, this.eo_1, completion);
    i.fo_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.tn($this$promise, $completion);
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
    tmp.pm_1 = tmp_0.go(Core$getInput$ref(Core));
  }
  protoOf(Core_0).ho = function (main, post, $completion) {
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
  protoOf(Core_0).qm = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.ho(main, post, $completion) : $super.ho.call(this, main, post, $completion);
  };
  protoOf(Core_0).cn = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).hn = function (message) {
    return Core.info(message);
  };
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function Companion() {
  }
  protoOf(Companion).io = function (value) {
    return _Annotations___init__impl__gg5cff(Companion_instance_3.jo(value));
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
  protoOf(Companion_0).ko = function (value) {
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
  function _Labels___get_value__impl__v31say($this) {
    return $this;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).lo = function (value) {
    var inputList = Companion_instance_3.jo(value);
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
      destination_0.s2(pair.x8_1, pair.y8_1);
    }
    var labels = destination_0;
    return _Labels___init__impl__usgt1a(labels);
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
    return toString(_Secrets___get_value__impl__50tkyy($this).y());
  }
  function Companion_2() {
  }
  protoOf(Companion_2).mo = function (value) {
    var inputList = Companion_instance_3.jo(value);
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
      throw IllegalArgumentException_init_$Create$("All secrets must be key-value-pairs separated by '=', a value was found that does not follow this");
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
      destination_0.s2(pair.x8_1, pair.y8_1);
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
  protoOf(Companion_3).jo = function (_this__u8e3s4) {
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
  protoOf(Companion_3).go = function (getInput) {
    return new Inputs(Companion_instance.io(getInput(InputNames_instance.no_1)), Companion_instance_0.ko(getInput(InputNames_instance.oo_1)), Companion_instance_1.lo(getInput(InputNames_instance.po_1)), Companion_instance_2.mo(getInput(InputNames_instance.qo_1)));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, dockerfilePath, labels, secrets) {
    this.dn_1 = annotations;
    this.en_1 = dockerfilePath;
    this.fn_1 = labels;
    this.gn_1 = secrets;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.dn_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.en_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.fn_1) + ', secrets=' + Secrets__toString_impl_fjs7pe(this.gn_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.dn_1);
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.en_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.fn_1) | 0;
    result = imul(result, 31) + Secrets__hashCode_impl_xq5xgv(this.gn_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.dn_1, tmp0_other_with_cast.dn_1))
      return false;
    if (!(this.en_1 === tmp0_other_with_cast.en_1))
      return false;
    if (!equals(this.fn_1, tmp0_other_with_cast.fn_1))
      return false;
    if (!equals(this.gn_1, tmp0_other_with_cast.gn_1))
      return false;
    return true;
  };
  function InputNames() {
    this.no_1 = 'annotations';
    this.oo_1 = 'dockerfile-path';
    this.po_1 = 'labels';
    this.qo_1 = 'secrets';
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
