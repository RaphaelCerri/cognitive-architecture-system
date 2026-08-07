'use strict';

const AUTHORING_CRITERIA = Object.freeze([
  { id: 'AC-01', rule: 'Use a stable semantic ID; never derive identity from a path or title.' },
  { id: 'AC-02', rule: 'Choose an observed compatible type or a namespaced extension; never shadow governing concepts.' },
  { id: 'AC-03', rule: 'Declare the actor claim appropriate to the artifact profile; tool access never implies authority.' },
  { id: 'AC-04', rule: 'Record creation provenance and intentional relations; unknown provenance remains explicit.' },
  { id: 'AC-05', rule: 'Use status as a compatibility summary and separate independent lifecycle dimensions when material.' },
  { id: 'AC-06', rule: 'Keep a non-empty human-readable body; frontmatter and body form one artifact.' },
  { id: 'AC-07', rule: 'Preserve unknown fields and declared predicates; normalization belongs to derived views.' },
  { id: 'AC-08', rule: 'Generated changes remain proposals until reviewed by the required authority.' },
]);

module.exports = { AUTHORING_CRITERIA };
