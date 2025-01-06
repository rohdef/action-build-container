(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'node:process', '@actions/core', '@docker/actions-toolkit', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('node:process'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['node:process'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-container'. Its dependency 'node:process' was not found. Please, check whether 'node:process' is loaded prior to 'kotlin.test.actions:action-build-container'.");
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
    globalThis['kotlin.test.actions:action-build-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-container'], globalThis['node:process'], Core, actionsToolkit, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, $module$node_process_fb67hx, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var process = $module$node_process_fb67hx.process;
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var protoOf = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.b3;
  var Companion_getInstance = kotlin_kotlin.$_$.x;
  var createMapFrom = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.j3;
  var mapOf = kotlin_kotlin.$_$.g1;
  var plus = kotlin_kotlin.$_$.h1;
  var toString = kotlin_kotlin.$_$.p2;
  var initMetadataForLambda = kotlin_kotlin.$_$.k2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.o1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.n2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.h2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i2;
  var hashCode = kotlin_kotlin.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.f2;
  var Collection = kotlin_kotlin.$_$.b1;
  var contains = kotlin_kotlin.$_$.r2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var split = kotlin_kotlin.$_$.u2;
  var mapCapacity = kotlin_kotlin.$_$.f1;
  var coerceAtLeast = kotlin_kotlin.$_$.q2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var isCharSequence = kotlin_kotlin.$_$.m2;
  var trim = kotlin_kotlin.$_$.v2;
  var lines = kotlin_kotlin.$_$.t2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.s2;
  var equals = kotlin_kotlin.$_$.e2;
  var initMetadataForObject = kotlin_kotlin.$_$.l2;
  //endregion
  //region block: pre-declaration
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
  function main($completion) {
    var tmp = new Core_0();
    return tmp.uj(main$slambda_0(null), VOID, $completion);
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).ek = function ($this$run, $completion) {
    var tmp = this.fk($this$run, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.d6();
  };
  protoOf(main$slambda).n6 = function (p1, $completion) {
    return this.ek(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).d6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        if (tmp === 0) {
          this.w5_1 = 1;
          var imageName = Companion_getInstance().lb();
          this.dk_1.gk('imageid', 'action: ' + imageName.toString());
          var this_0 = process.env;
          var environment = createMapFrom(this_0);
          var tmp0_elvis_lhs = environment.w('GITHUB_RUN_ID');
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$('GITHUB_RUN_ID env variable is not set');
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var runId = tmp_0;
          var labels = plus(mapOf(to('runnumber', runId)), _Labels___get_value__impl__v31say(this.dk_1.tj_1.jk_1));
          this.dk_1.lk('lbls: ' + toString(labels));
          this.dk_1.lk('Running ' + runId);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda).fk = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.dk_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.ek($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.uk_1 = $main;
    this.vk_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).xk = function ($this$promise, $completion) {
    var tmp = this.yk($this$promise, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.d6();
  };
  protoOf(Core$run$lambda$slambda).n6 = function (p1, $completion) {
    return this.xk((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).d6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            this.v5_1 = 1;
            suspendResult = this.uk_1(this.vk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).yk = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.uk_1, this.vk_1, completion);
    i.wk_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.xk($this$promise, $completion);
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
    this.hl_1 = $it;
    this.il_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).xk = function ($this$promise, $completion) {
    var tmp = this.yk($this$promise, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.d6();
  };
  protoOf(Core$run$slambda).n6 = function (p1, $completion) {
    return this.xk((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).d6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            this.v5_1 = 1;
            suspendResult = this.hl_1(this.il_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).yk = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.hl_1, this.il_1, completion);
    i.jl_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.xk($this$promise, $completion);
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
    tmp.tj_1 = tmp_0.kl(Core$getInput$ref(Core));
  }
  protoOf(Core_0).ll = function (main, post, $completion) {
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
  protoOf(Core_0).uj = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.ll(main, post, $completion) : $super.ll.call(this, main, post, $completion);
  };
  protoOf(Core_0).gk = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).lk = function (message) {
    return Core.info(message);
  };
  function _Annotations___init__impl__gg5cff(value) {
    return value;
  }
  function Companion() {
  }
  protoOf(Companion).ml = function (value) {
    return _Annotations___init__impl__gg5cff(Companion_instance_3.nl(value));
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
  protoOf(Companion_0).ol = function (value) {
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
  protoOf(Companion_1).pl = function (value) {
    var inputList = Companion_instance_3.nl(value);
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
      throw IllegalArgumentException_init_$Create$("All labels must be key-value-pairs separated by '=', a value was found that does not follow this");
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
      destination_0.h2(pair.f9_1, pair.g9_1);
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
    return toString(_Secrets___get_value__impl__50tkyy($this).x());
  }
  function Companion_2() {
  }
  protoOf(Companion_2).ql = function (value) {
    var inputList = Companion_instance_3.nl(value);
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
      destination_0.h2(pair.f9_1, pair.g9_1);
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
  protoOf(Companion_3).nl = function (_this__u8e3s4) {
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
  protoOf(Companion_3).kl = function (getInput) {
    return new Inputs(Companion_instance.ml(getInput(InputNames_instance.rl_1)), Companion_instance_0.ol(getInput(InputNames_instance.sl_1)), Companion_instance_1.pl(getInput(InputNames_instance.tl_1)), Companion_instance_2.ql(getInput(InputNames_instance.ul_1)));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Inputs(annotations, dockerfilePath, labels, secrets) {
    this.hk_1 = annotations;
    this.ik_1 = dockerfilePath;
    this.jk_1 = labels;
    this.kk_1 = secrets;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.hk_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.ik_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.jk_1) + ', secrets=' + Secrets__toString_impl_fjs7pe(this.kk_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = Annotations__hashCode_impl_jz1p9q(this.hk_1);
    result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.ik_1) | 0;
    result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.jk_1) | 0;
    result = imul(result, 31) + Secrets__hashCode_impl_xq5xgv(this.kk_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!equals(this.hk_1, tmp0_other_with_cast.hk_1))
      return false;
    if (!(this.ik_1 === tmp0_other_with_cast.ik_1))
      return false;
    if (!equals(this.jk_1, tmp0_other_with_cast.jk_1))
      return false;
    if (!equals(this.kk_1, tmp0_other_with_cast.kk_1))
      return false;
    return true;
  };
  function InputNames() {
    this.rl_1 = 'annotations';
    this.sl_1 = 'dockerfile-path';
    this.tl_1 = 'labels';
    this.ul_1 = 'secrets';
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
