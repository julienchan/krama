const { union, derivations } = require('folktale/adt/union');

const AST = union('krama:ast', {
  Seq(items) {
    return { items };
  },

  // --[ Basic entities ]-----------------------------------------------
  Identifier(name) {
    return { name };
  },

  Hole() {
    return { };
  },

  Keyword(name) {
    return { name };
  },

  Text(value) {
    return { value };
  },

  Character(character) {
    return { character };
  },

  InterpolateExpression(expression) {
    return { expression };
  },

  Interpolate(items) {
    return { items };
  },

  Integer(sign, value) {
    return { sign, value };
  },

  Decimal(sign, integral, decimal, exponent) {
    return { sign, integral, decimal, exponent };
  },

  Boolean(value) {
    return { value };
  },

  Vector(items) {
    return { items };
  },

  VectorSpread(expression) {
    return { expression };
  },

  VectorElement(expression) {
    return { expression };
  },

  Record(pairs) {
    return { pairs };
  },

  Lambda(value, options, expression) {
    return { value, options, expression };
  },

  Tagged(tag, predicates) {
    return { tag, predicates };
  },

  // --[ Pattern matching ]---------------------------------------------
  Match(expression, cases) {
    return { expression, cases };
  },

  MatchCase(pattern, expression) {
    return { pattern, expression };
  },

  MatchBind(identifier) {
    return { identifier };
  },

  MatchEquals(identifier, expression) {
    return { identifier, expression };
  },

  MatchTagged(tag, patterns) {
    return { tag, patterns };
  },

  MatchVector(items) {
    return { items };
  },

  MatchVectorSpread(pattern) {
    return { pattern };
  },

  MatchVectorElement(pattern) {
    return { pattern };
  },

  MatchAny() {
    return { };
  },

  // --[ Declarations ]-------------------------------------------------
  Define(id, expression, documentation) {
    return { id, expression, documentation };
  },

  Import(path, modifier) {
    return { path, modifier };
  },

  ImportAliasing(path, alias) {
    return { path, alias };
  },

  Export(identifier) {
    return { identifier };
  },

  ExportAliasing(identifier, alias) {
    return { identifier, alias };
  },

  // --[ Expressions ]--------------------------------------------------
  ExprSequence(expression, rest) {
    return { expression, rest };
  },

  Invoke(callee, input, options) {
    return { callee, input, options };
  },

  Pipe(input, transformation) {
    return { input, transformation };
  },

  Variable(id) {
    return { id };
  },

  Let(binding, value, expression) {
    return { binding, value, expression };
  },

  IfThenElse(condition, consequent, alternate) {
    return { condition, consequent, alternate };
  },

  Get(expression, property) {
    return { expression, property };
  },

  Infix(operator, left, right) {
    return { operator, left, right };
  },

  Prefix(operator, expression) {
    return { operator, expression };
  },

  Open(record, modifier, body) {
    return { record, modifier, body };
  },

  OpenExpose(bindings) {
    return { bindings };
  },

  OpenHide(bindings) {
    return { bindings };
  },

  OpenAll() { },

  OpenBinding(name, alias) {
    return { name, alias };
  },

  // --[ Imperative sublanguage ]--------------------------------------
  Do(builder, instructions) {
    return { builder, instructions };
  },

  DoCall(expression) {
    return { expression };
  },

  DoAction(expression) {
    return { expression };
  },

  DoReturn(expression) {
    return { expression };
  },

  DoBind(id, expression) {
    return { id, expression };
  },

  DoLet(id, expression) {
    return { id, expression };
  },

  DoIfThenElse(condition, consequent, alternate) {
    return { condition, consequent, alternate };
  },

  // --[ Entry point ]--------------------------------------------------
  Program(declarations) {
    return { declarations };
  }
}).derive(
  derivations.equality,
  derivations.debugRepresentation,
  derivations.serialization
);

module.exports = AST;