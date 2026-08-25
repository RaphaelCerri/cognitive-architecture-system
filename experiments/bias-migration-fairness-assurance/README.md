---
title: "Experiment: Bias Migration & Fairness Assurance"
status: experimental
canonicality: experimental_prototype_not_canon
created_at: 2026-08-07
authority: "Direct CVO request, CSA-BMFA-001 design"
language: en
---

# Bias Migration & Fairness Assurance

> **English** · [Português](README.pt-BR.md)

An executable proof for evaluating cognitive changes by comparing harm surfaces before and after a
transformation. It classifies the outcome as `preserved`, `reduced`, `amplified`, or `displaced`.

`Displaced` is the critical case: an aggregate metric improves while harm moves to another group or
dimension.

## Demonstrated controls

- Explicit baseline and candidate observations.
- Group and dimension-aware comparison instead of aggregate-only averages.
- Detection of omission bias and unauthorized sensitive segmentation.
- Rejection of self-approval as independent assurance.
- Detection of uncertainty displaced by memory compression.
- Negative scenarios for improvements limited to the dominant source.

## Run

```bash
npm install
npm test
```

## Minimum observation contract

Each scenario declares the affected population, observed dimension, baseline harm, candidate harm,
authority for the change, and evidence used for classification. Missing observation fields fail
validation rather than being treated as neutral.

## Boundaries

This is a deterministic experimental control over synthetic fixtures. It is not a statistical
fairness certification, a production monitoring service, or proof that a deployed model is fair.

The recursive test applies the assurance mechanism to its own transformations so that a fairness
control cannot silently exempt itself from the same review standard.
