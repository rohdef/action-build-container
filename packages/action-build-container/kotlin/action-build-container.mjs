import {
  VOID7hggqo3abtya as VOID,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance14hm69wy3kr8u as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Companion_getInstance31zkbd7u6qrr4 as Companion_getInstance,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  to2cs3ny02qtbcb as to,
  mapOf2zpbbmyqk8xpf as mapOf,
  plus2m1vv33moko5t as plus,
  toString1pkumu07cwy4m as toString,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  get_EmptyContinuationn1rwa6yr6j5w as get_EmptyContinuation,
  isInterface3d6p8outrmvmk as isInterface,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Collection1k04j3hzsbod0 as Collection,
  contains3ue2qo8xhmpf1 as contains,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$,
  split2bvyvnrlcifjv as split,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap_init_$Create$snys8oz8txtu as LinkedHashMap_init_$Create$,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  lines3g90sq0zeq43v as lines,
  ArrayList_init_$Create$2rimpp4x9tjd3 as ArrayList_init_$Create$_0,
  isBlank1dvkhjjvox3p0 as isBlank,
  equals2au1ep9vhcato as equals,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  GlobalScope_instancefw9o755vmweu as GlobalScope_instance,
  promise1ky6tawqaxbt4 as promise,
} from './kotlinx-coroutines-core.mjs';
import node_process_process_dcpv5o from 'node:process';
import * as Core from '@actions/core';
import actionsToolkit from '@docker/actions-toolkit';
//region block: imports
var imul = Math.imul;
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
  return tmp.yl(main$slambda_0(null), VOID, $completion);
}
function main$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(main$slambda).im = function ($this$run, $completion) {
  var tmp = this.jm($this$run, $completion);
  tmp.p5_1 = Unit_instance;
  tmp.q5_1 = null;
  return tmp.v5();
};
protoOf(main$slambda).f6 = function (p1, $completion) {
  return this.im(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
};
protoOf(main$slambda).v5 = function () {
  var suspendResult = this.p5_1;
  $sm: do
    try {
      var tmp = this.n5_1;
      if (tmp === 0) {
        this.o5_1 = 1;
        var imageName = Companion_getInstance().jb();
        this.hm_1.km('imageid', 'action: ' + imageName.toString());
        var tmp0_elvis_lhs = node_process_process_dcpv5o.env['GITHUB_RUN_ID'];
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$('GITHUB_RUN_ID env variable is not set');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var runId = tmp_0;
        var labels = plus(mapOf(to('runnumber', runId)), _Labels___get_value__impl__v31say(this.hm_1.xl_1.nm_1));
        this.hm_1.pm('lbls: ' + toString(labels));
        this.hm_1.pm('Running ' + runId);
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
protoOf(main$slambda).jm = function ($this$run, completion) {
  var i = new main$slambda(completion);
  i.hm_1 = $this$run;
  return i;
};
function main$slambda_0(resultContinuation) {
  var i = new main$slambda(resultContinuation);
  var l = function ($this$run, $completion) {
    return i.im($this$run, $completion);
  };
  l.$arity = 1;
  return l;
}
function mainWrapper() {
  main(get_EmptyContinuation());
}
function Core$run$lambda$slambda($main, this$0, resultContinuation) {
  this.ym_1 = $main;
  this.zm_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Core$run$lambda$slambda).bn = function ($this$promise, $completion) {
  var tmp = this.cn($this$promise, $completion);
  tmp.p5_1 = Unit_instance;
  tmp.q5_1 = null;
  return tmp.v5();
};
protoOf(Core$run$lambda$slambda).f6 = function (p1, $completion) {
  return this.bn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
          suspendResult = this.ym_1(this.zm_1, this);
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
protoOf(Core$run$lambda$slambda).cn = function ($this$promise, completion) {
  var i = new Core$run$lambda$slambda(this.ym_1, this.zm_1, completion);
  i.an_1 = $this$promise;
  return i;
};
function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
  var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.bn($this$promise, $completion);
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
  this.ln_1 = $it;
  this.mn_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Core$run$slambda).bn = function ($this$promise, $completion) {
  var tmp = this.cn($this$promise, $completion);
  tmp.p5_1 = Unit_instance;
  tmp.q5_1 = null;
  return tmp.v5();
};
protoOf(Core$run$slambda).f6 = function (p1, $completion) {
  return this.bn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
          suspendResult = this.ln_1(this.mn_1, this);
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
protoOf(Core$run$slambda).cn = function ($this$promise, completion) {
  var i = new Core$run$slambda(this.ln_1, this.mn_1, completion);
  i.nn_1 = $this$promise;
  return i;
};
function Core$run$slambda_0($it, this$0, resultContinuation) {
  var i = new Core$run$slambda($it, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.bn($this$promise, $completion);
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
  tmp.xl_1 = tmp_0.on(Core$getInput$ref(Core));
}
protoOf(Core_0).pn = function (main, post, $completion) {
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
protoOf(Core_0).yl = function (main, post, $completion, $super) {
  post = post === VOID ? null : post;
  return $super === VOID ? this.pn(main, post, $completion) : $super.pn.call(this, main, post, $completion);
};
protoOf(Core_0).km = function (name, value) {
  return Core.setOutput(name, value);
};
protoOf(Core_0).pm = function (message) {
  return Core.info(message);
};
function _Annotations___init__impl__gg5cff(value) {
  return value;
}
function Companion() {
}
protoOf(Companion).qn = function (value) {
  return _Annotations___init__impl__gg5cff(Companion_instance_3.rn(value));
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
protoOf(Companion_0).sn = function (value) {
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
protoOf(Companion_1).tn = function (value) {
  var inputList = Companion_instance_3.rn(value);
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
protoOf(Companion_2).un = function (value) {
  var inputList = Companion_instance_3.rn(value);
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
protoOf(Companion_3).rn = function (_this__u8e3s4) {
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
protoOf(Companion_3).on = function (getInput) {
  return new Inputs(Companion_instance.qn(getInput(InputNames_instance.vn_1)), Companion_instance_0.sn(getInput(InputNames_instance.wn_1)), Companion_instance_1.tn(getInput(InputNames_instance.xn_1)), Companion_instance_2.un(getInput(InputNames_instance.yn_1)));
};
var Companion_instance_3;
function Companion_getInstance_4() {
  return Companion_instance_3;
}
function Inputs(annotations, dockerfilePath, labels, secrets) {
  this.lm_1 = annotations;
  this.mm_1 = dockerfilePath;
  this.nm_1 = labels;
  this.om_1 = secrets;
}
protoOf(Inputs).toString = function () {
  return 'Inputs(annotations=' + Annotations__toString_impl_tawfwj(this.lm_1) + ', dockerfilePath=' + DockerfilePath__toString_impl_moci74(this.mm_1) + ', labels=' + Labels__toString_impl_hmv2m6(this.nm_1) + ', secrets=' + Secrets__toString_impl_fjs7pe(this.om_1) + ')';
};
protoOf(Inputs).hashCode = function () {
  var result = Annotations__hashCode_impl_jz1p9q(this.lm_1);
  result = imul(result, 31) + DockerfilePath__hashCode_impl_qllmz5(this.mm_1) | 0;
  result = imul(result, 31) + Labels__hashCode_impl_vn32k3(this.nm_1) | 0;
  result = imul(result, 31) + Secrets__hashCode_impl_xq5xgv(this.om_1) | 0;
  return result;
};
protoOf(Inputs).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Inputs))
    return false;
  var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
  if (!equals(this.lm_1, tmp0_other_with_cast.lm_1))
    return false;
  if (!(this.mm_1 === tmp0_other_with_cast.mm_1))
    return false;
  if (!equals(this.nm_1, tmp0_other_with_cast.nm_1))
    return false;
  if (!equals(this.om_1, tmp0_other_with_cast.om_1))
    return false;
  return true;
};
function InputNames() {
  this.vn_1 = 'annotations';
  this.wn_1 = 'dockerfile-path';
  this.xn_1 = 'labels';
  this.yn_1 = 'secrets';
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

//# sourceMappingURL=action-build-container.mjs.map
