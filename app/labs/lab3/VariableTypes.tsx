export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let customString ="Ryan Chen";
  let customNumber = "2026";
  let isCustomString = typeof customString;
  let isCustomNumber = typeof customNumber;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      customString = {customString}
      <br />
      customNumber = {customNumber}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      isCustomString = {isCustomString}
      <br />
      isCustomNumber = {isCustomNumber}
      <br />
      sampleCount = {sampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      isSampleLabel = {isSampleLabel}
      <br />
      <hr />
    </div>
  );
}