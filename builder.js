// form inputs
const recordSizeInput = document.getElementById("record-size");
const amountInput = document.getElementById("record-amount");
const recordTypeInput = document.getElementById("record-type");
const jacketTypeInput = document.getElementById("jacket-type");
const labelTypeInput = document.getElementById("label-type");
const innerSleeveTypeInput = document.getElementById("sleeve-type");
const printedInsertTypeInput = document.getElementById("insert-type");
const outerWrapTypeInput = document.getElementById("outerwrap-type");
const recordColorInput = document.getElementById("record-color");
const recordCuttingInput = document.getElementById("record-cutting");
const labelColorInput = document.getElementById("label-color");
const downloadCardsTypeInput = document.getElementById("download-card-type");
const recordWeightInput = document.getElementById("record-weight");
const jacketColorInput = document.getElementById("jacket-color");
const jacketFinishInput = document.getElementById("jacket-finish");
const innerSleeveColorInput = document.getElementById("sleeve-color");
const innerSleeveFinishInput = document.getElementById("sleeve-finish");
const printedInsertSidesInput = document.getElementById("insert-sides");
const printedInsertColorInput = document.getElementById("insert-color");
const printedInsertFinishInput = document.getElementById("insert-finish");

const splatterColorsInput = document.getElementById("splatter-colors");
const splatterColorOneInput = document.getElementById("splatter-color-one");
const splatterColorTwoInput = document.getElementById("splatter-color-two");
const splatterColorThreeInput = document.getElementById("splatter-color-three");
const splatterColorOneButton = document.getElementById(
  "splatter-color-one-button"
);
const splatterColorTwoButton = document.getElementById(
  "splatter-color-two-button"
);
const splatterColorThreeButton = document.getElementById(
  "splatter-color-three-button"
);
const splatterColorOneDisplay = document.getElementById(
  "selected-splatter-color-one-name"
);
const splatterColorTwoDisplay = document.getElementById(
  "selected-splatter-color-two-name"
);
const splatterColorThreeDisplay = document.getElementById(
  "selected-splatter-color-three-name"
);
const splatterColorOnePickerContainer = document.getElementById(
  "splatter-picker-color-one-container"
);
const splatterColorTwoPickerContainer = document.getElementById(
  "splatter-picker-color-two-container"
);
const splatterColorThreePickerContainer = document.getElementById(
  "splatter-picker-color-three-container"
);
const splatterColorOneLabel = document.getElementById(
  "splatter-color-one-label"
);
const splatterColorTwoLabel = document.getElementById(
  "splatter-color-two-label"
);
const splatterColorThreeLabel = document.getElementById(
  "splatter-color-three-label"
);
const splatterOptionsContainer = document.getElementById(
  "splatter-options-container"
);

const projectTitleInput = document.querySelector("input[name='project-name']");

const recordColorButton = document.getElementById("record-color-button");
const recordColorPicker = document.getElementById(
  "record-color-picker-container"
);
const recordColorNameDisplay = document.getElementById(
  "selected-record-color-name"
);
const recordColorOptionContainer = document.querySelector(
  ".record-color-option-container"
);
const innerSleeveUploadContainer = document.getElementById(
  "inner-sleeve-upload-container"
);
const shortRunRecordTypeContainer = document.getElementById(
  "short-run-record-type-options"
);
const productionRunRecordTypeContainer = document.getElementById(
  "production-run-record-type-options"
);
const recordOpacityOptionsContainer = document.getElementById(
  "record-opacity-options-container"
);
const neotechColorOptionsContainer = document.getElementById(
  "neotech-color-options-container"
);
const memphisColorOptionsContainer = document.getElementById(
  "memphis-color-options-container"
);

const jacketFrontUpload = document.querySelector(
  "input[name='jacket-front-upload']"
);
const labelFrontUpload = document.querySelector(
  "input[name='label-front-upload']"
);
const pictureDiscUpload = document.getElementById("picture-disc-upload");
const innerSleeveUpload = document.querySelector("input[name='sleeve-upload']");
const printedInsertUpload = document.querySelector(
  "input[name='insert-upload']"
);

const jacketFrontFilenameDisplay = document.getElementById(
  "jacket-front-upload-file-display"
);
const removeJacketFrontImage = document.getElementById(
  "remove-jacket-front-image"
);
const labelFrontFilenameDisplay = document.getElementById(
  "label-front-upload-file-display"
);
const removeLabelFrontImage = document.getElementById(
  "remove-label-front-image"
);
const pictureDiscFilenameDisplay = document.getElementById(
  "picture-disc-upload-file-display"
);
const removePictureDiscImage = document.getElementById(
  "remove-picture-disc-image"
);
const sleeveFilenameDisplay = document.getElementById(
  "sleeve-upload-file-display"
);
const removeSleeveImage = document.getElementById("remove-sleeve-image");
const insertFilenameDisplay = document.getElementById(
  "insert-upload-file-display"
);
const removeInsertImage = document.getElementById("remove-insert-image");
const minQtyDisplay = document.getElementById("min-qty-display");
const maxQtyDisplay = document.getElementById("max-qty-display");

const quantityInput = document.getElementById("record-quantity");

// modal selectors
const closeModalButton = document.getElementById("close-breakdown-modal");
const modalBackground = document.getElementById("pricing-breakdown-modal");
const pricingBreakdownButton = document.getElementById(
  "pricing-breakdown-button"
);
const breakdownContainer = document.querySelector(
  ".builder-breakdown-container"
);
const continueEditingButton = document.getElementById(
  "continue-editing-button"
);
const builderSubmitButton = document.getElementById("builder-submit-button");

// pricing breakdown selectors
const orderTotalDisplay = document.getElementById("order-total-display");
const orderTotalPerUnitDisplay = document.getElementById(
  "order-total-per-unit"
);
const projectTitleDisplay = document.getElementById("project-title-display");
const sliderTotalPriceDisplay = document.getElementById(
  "slider-total-price-display"
);
const sliderTotalPriceDisplayPerUnit = document.getElementById(
  "slider-total-price-per-unit"
);

// mobile display components
const mobileSliderContainer = document.getElementById(
  "mobile-slider-container"
);
const mobileQuantityInput = document.getElementById("record-quantity-mobile");
const sliderTotalPriceDisplayMobile = document.getElementById(
  "slider-total-price-display-mobile"
);
const sliderTotalPriceDisplayPerUnitMobile = document.getElementById(
  "slider-total-price-per-unit-mobile"
);
const pricingBreakdownButtonMobile = document.getElementById(
  "pricing-breakdown-button-mobile"
);
const builderContainer = document.getElementById("builder-container");
const formColumn = document.getElementById("form-column");
const builderForm = document.getElementById("wf-form-Record-Builder-Form");
const visualizerColumn = document.getElementById("visualizer-column");

// breakdown display selectors
const masteringBreakdownDisplay = document.getElementById(
  "mastering-breakdown-display"
);
const setupFeeBreakdownDisplay = document.getElementById(
  "setup-fee-breakdown-display"
);
const cuttingFeeBreakdownDisplay = document.getElementById(
  "cutting-fee-breakdown-display"
);
const platingFeeBreakdownDisplay = document.getElementById(
  "plating-fee-breakdown-display"
);
const stampersFeeBreakdownDisplay = document.getElementById(
  "stampers-fee-breakdown-display"
);
const centerLabelFeeBreakdownDisplay = document.getElementById(
  "center-labels-fee-breakdown-display"
);
const recordsFeeBreakdownDisplay = document.getElementById(
  "records-fee-breakdown-display"
);
const innerSleeveFeeBreakdownDisplay = document.getElementById(
  "inner-sleeve-fee-breakdown-display"
);
const jacketFeeBreakdownDisplay = document.getElementById(
  "jacket-fee-breakdown-display"
);
const insertFeeBreakdownDisplay = document.getElementById(
  "insert-fee-breakdown-display"
);
const outerwrapFeeBreakdownDisplay = document.getElementById(
  "outerwrap-fee-breakdown-display"
);
const downloadCardsFeeBreakdownDisplay = document.getElementById(
  "download-cards-fee-breakdown-display"
);
const miscFeeBreakdownDisplay = document.getElementById(
  "misc-fee-breakdown-display"
);
const insertionFeeBreakdownDisplay = document.getElementById(
  "insertion-fee-breakdown-display"
);
const masteringBreakdownOptionDisplay = document.getElementById(
  "mastering-option-display"
);
const masteringBreakdownOptionPriceDisplay = document.getElementById(
  "mastering-option-sub-price"
);
const setupFeeBreakdownOptionDisplay = document.getElementById(
  "setup-option-display"
);
const setupFeeBreakdownOptionPriceDisplay = document.getElementById(
  "setup-option-sub-price"
);
const cuttingBreakdownOptionDisplay = document.getElementById(
  "cutting-option-display"
);
const cuttingBreakdownOptionPriceDisplay = document.getElementById(
  "cutting-option-sub-price"
);
const platingBreakdownOptionDisplay = document.getElementById(
  "plating-option-display"
);
const platingBreakdownOptionPriceDisplay = document.getElementById(
  "plating-option-sub-price"
);
const testPressingsInitialPriceDisplay = document.getElementById(
  "test-pressings-initial-sub-price"
);
const numOfAdditionalPressingsDisplay = document.getElementById(
  "num-of-additional-pressings-display"
);
const testPressingsShippingPriceDisplay = document.getElementById(
  "test-pressings-shipping-sub-price"
);
const centerLabelBreakdownOptionDisplay = document.getElementById(
  "center-labels-option-display"
);
const centerLabelBreakdownOptionPriceDisplay = document.getElementById(
  "center-labels-option-sub-price"
);
const recordSizeBreakdownDisplay = document.getElementById(
  "record-size-breakdown-display"
);
const recordWeightBreakdownDisplay = document.getElementById(
  "record-weight-breakdown-display"
);
const recordTypeBreakdownDisplay = document.getElementById(
  "record-type-breakdown-display"
);
const recordBreakdownOptionsPriceDisplay = document.getElementById(
  "record-option-sub-price"
);
const sleeveTypeBreakdownDisplay = document.getElementById(
  "sleeve-type-breakdown-display"
);
const sleeveColorBreakdownDisplay = document.getElementById(
  "sleeve-color-breakdown-display"
);
const sleeveFinishBreakdownDisplay = document.getElementById(
  "sleeve-finish-breakdown-display"
);
const sleeveBreakdownOptionPriceDisplay = document.getElementById(
  "sleeve-option-sub-price"
);
const jacketTypeBreakdownDisplay = document.getElementById(
  "jacket-type-breakdown-display"
);
const jacketColorBreakdownDisplay = document.getElementById(
  "jacket-color-breakdown-display"
);
const jacketFinishBreakdownDisplay = document.getElementById(
  "jacket-finish-breakdown-display"
);
const jacketBreakdownOptionPriceDisplay = document.getElementById(
  "jacket-option-sub-price"
);
const insertTypeBreakdownDisplay = document.getElementById(
  "insert-type-breakdown-display"
);
const insertSidesBreakdownDisplay = document.getElementById(
  "insert-sides-breakdown-display"
);
const insertColorBreakdownDisplay = document.getElementById(
  "insert-color-breakdown-display"
);
const insertFinishBreakdownDisplay = document.getElementById(
  "insert-finish-breakdown-display"
);
const insertBreakdownOptionPriceDisplay = document.getElementById(
  "insert-option-sub-price"
);
const outerwrapBreakdownOptionDisplay = document.getElementById(
  "outerwrap-option-display"
);
const outerwrapBreakdownOptionPriceDisplay = document.getElementById(
  "outerwrap-option-sub-price"
);
const downloadCardBreakdownOptionDisplay = document.getElementById(
  "download-card-option-display"
);
const downloadCardBreakdownOptionPriceDisplay = document.getElementById(
  "download-card-option-sub-price"
);
const insertionOfRecordPriceDisplay = document.getElementById(
  "insertion-of-record-price-display"
);
const insertionOfSleevePriceDisplay = document.getElementById(
  "insertion-of-sleeve-price-display"
);
const insertionOfInsertPriceDisplay = document.getElementById(
  "insertion-of-insert-price-display"
);
const insertionOfJacketPriceDisplay = document.getElementById(
  "insertion-of-jacket-price-display"
);
const splatterSurchargePriceDisplay = document.getElementById(
  "splatter-surcharge-sub-price"
);

// hidden form inputs for pricing
const surchargePriceInput = document.getElementById("surcharge-price-input");
const setupPriceInput = document.getElementById("setup-price-input");
const cuttingPriceInput = document.getElementById("cutting-price-input");
const platingPriceInput = document.getElementById("plating-price-input");
const stampersPriceInput = document.getElementById("stampers-price-input");
const testPressingsPriceInput = document.getElementById(
  "test-pressings-price-input"
);
const centerLabelPriceInput = document.getElementById(
  "center-label-price-input"
);
const recordPriceInput = document.getElementById("record-price-input");
const innerSleevePriceIput = document.getElementById(
  "inner-sleeve-price-input"
);
const jacketPriceInput = document.getElementById("jacket-price-input");
const insertPriceInput = document.getElementById("insert-price-input");
const downloadCardPriceInput = document.getElementById(
  "download-card-price-input"
);
const outerwrapPriceInput = document.getElementById("outerwrap-price-input");
const insertionPriceInput = document.getElementById("insertion-price-input");
const miscPriceInput = document.getElementById("misc-price-input");
const totalPriceInput = document.getElementById("total-price-input");
const platingDisplayInput = document.getElementById("plating-display-input");
const testPressingsShippingFeeInput = document.getElementById(
  "test-pressings-shipping-fee-input"
);
const insertionOfRecordPriceInput = document.getElementById(
  "insertion-of-record-price-input"
);
const insertionOfInnerSleevePriceInput = document.getElementById(
  "insertion-of-inner-sleeve-price-input"
);
const insertionOfPrintedInsertPriceInput = document.getElementById(
  "insertion-of-printed-insert-price-input"
);
const insertionOfJacketPriceInput = document.getElementById(
  "insertion-of-jacket-price-input"
);
const testPressingsTotalPriceInput = document.getElementById(
  "test-pressings-total-price-input"
);

const missingInfoDisplay = document.getElementById("missing-info-display");
const missingInfoContainer = document.getElementById("missing-info-container");
const jacketOptionsContainer = document.getElementById(
  "jacket-options-container"
);
const labelUploadContainer = document.getElementById("label-options-container");
const labelColorOptionsContainer = document.getElementById(
  "blank-label-options-container"
);
const sleeveOptionsContainer = document.getElementById(
  "sleeve-options-container"
);
const insertOptionsContainer = document.getElementById(
  "insert-options-container"
);
const jacketFinishContainer = document.getElementById("jacket-finish-options");
const innerSleeveFinishContainer = document.getElementById(
  "inner-sleeve-finish-options"
);
const insertFinishContainer = document.getElementById("insert-finish-options");
const formVerificationSuccessDiv = document.getElementById(
  "form-verification-success-div"
);

const prepareToSubmit = document.getElementById("prepare-to-submit");

// visualizer selectors
const jacketVisualDisplay = document.getElementById(
  "builder-jacket-front-display"
);
const recordVisualDisplay = document.getElementById("builder-record-display");
const mobileJacketVisualDisplay = document.getElementById(
  "mobile-builder-jacket-display"
);
const mobileRecordVisualDisplay = document.getElementById(
  "mobile-builder-record-display"
);
const DEFAULT_RECORD_IMAGE =
  "url(https://uploads-ssl.webflow.com/65ce69671190e385bf638294/66c35137e88fe82114818e60_Black_Record.png)";

function init() {
  // hide anything that is not an option with the default 100 quantity
  setElementsDisplay([formVerificationSuccessDiv], "none");

  let invalidOptions = [];
  invalidOptions.push(document.getElementById("insert-7x7"));
  invalidOptions.push(document.getElementById("insert-14x7"));
  setElementsDisplay(invalidOptions, "none");

  // hide option containers for anything that doesn't have pre-selected options
  setElementsDisplay(
    [
      recordColorOptionContainer,
      labelColorOptionsContainer,
      sleeveOptionsContainer,
      insertOptionsContainer,
      splatterColorOneLabel,
      splatterColorOneButton,
      splatterColorTwoLabel,
      splatterColorTwoButton,
      splatterColorThreeLabel,
      splatterColorThreeButton,
      splatterOptionsContainer,
    ],
    "none"
  );

  setDefaultOptions();
}

function setDefaultOptions() {
  recordCuttingInput.value = "mrp supplied";
  selected.recordCutting = "mrp supplied";
  recordSizeInput.value = "12";
  selected.recordSize = "12";
  amountInput.value = "single";
  selected.amount = "single";
  recordTypeInput.value = "black";
  selected.recordType = "black";
  recordWeightInput.value = "standard";
  selected.recordWeight = "standard";
  jacketTypeInput.value = "single pocket";
  selected.jacketType = "single pocket";
  jacketColorInput.value = "full color";
  selected.jacketColor = "full color";
  jacketFinishInput.value = "standard gloss";
  selected.jacketFinish = "standard gloss";
  labelTypeInput.value = "full color";
  selected.labelType = "full color";
  innerSleeveTypeInput.value = "anti-static";
  selected.innerSleeveType = "anti-static";
  printedInsertTypeInput.value = "none";
  selected.printedInsertType = "none";
  downloadCardsTypeInput.value = "none";
  selected.downloadCardType = "none";
  outerWrapTypeInput.value = "polybag";
  selected.outerWrapType = "polybag";

  setRecordBackground();
}

const selected = {
  recordSize: null,
  amount: null,
  recordType: null,
  jacketType: null,
  labelType: null,
  labelColor: null,
  innerSleeveType: null,
  printedInsertType: null,
  outerWrapType: null,
  recordOpacity: null,
  recordWeight: null,
  jacketColor: null,
  jacketFinish: null,
  innerSleeveColor: null,
  innerSleeveFinish: null,
  printedInsertSides: null,
  printedInsertColor: null,
  printedInsertFinish: null,
  testPressings: "5",
  recordColorName: null,
  projectTitle: null,
  quantity: quantityInput.value,
  recordCutting: null,
  downloadCardType: null,
  splatterColors: "0",
  splatterOneColorName: null,
  splatterTwoColorName: null,
  splatterThreeColorName: null,
};

init();

document.body.addEventListener("click", () => {
  let allVisibleElements = document.querySelectorAll(".visible");
  document.body.style.overflow = "auto";

  allVisibleElements.forEach((el) => {
    el.classList.remove("visible");
  });
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    let allVisibleElements = document.querySelectorAll(".visible");
    document.body.style.overflow = "auto";

    allVisibleElements.forEach((el) => {
      el.classList.remove("visible");
    });
  }
});

function updateSelectedState(input, name) {
  selected[name] = input.value;
}

function setElementsDisplay(nodeList, display) {
  nodeList.forEach((node) => {
    if (node) {
      node.style.display = display;
    }
  });
}

function clearInput(input, key) {
  input.value = "";
  selected[key] = null;
}

function setInputsRequiredTrue(nodeList) {
  nodeList.forEach((node) => {
    if (node.type !== "file") {
      node.setAttribute("required", "true");
    }
  });
}

function setInputsRequiredFalse(nodeList) {
  nodeList.forEach((node) => {
    node.removeAttribute("required");
  });
}

function setJacketBackground(imageValue) {
  if (jacketVisualDisplay) {
    jacketVisualDisplay.style.backgroundImage = imageValue || "";
  }
  if (mobileJacketVisualDisplay) {
    mobileJacketVisualDisplay.style.backgroundImage = imageValue || "";
  }
}

function setRecordBackground(imageValue) {
  const background = imageValue || DEFAULT_RECORD_IMAGE;
  if (recordVisualDisplay) {
    recordVisualDisplay.style.backgroundImage = background;
    recordVisualDisplay.style.backgroundSize = "contain";
    recordVisualDisplay.style.backgroundPosition = "center";
    recordVisualDisplay.style.backgroundRepeat = "no-repeat";
  }
  if (mobileRecordVisualDisplay) {
    mobileRecordVisualDisplay.style.backgroundImage = background;
    mobileRecordVisualDisplay.style.backgroundSize = "contain";
    mobileRecordVisualDisplay.style.backgroundPosition = "center";
    mobileRecordVisualDisplay.style.backgroundRepeat = "no-repeat";
  }
}

function setRecordTypeBasedOnSize() {
  if (selected.recordSize === "7") {
    const invalidOptions = [];
    invalidOptions.push(document.getElementById("eco-mix"));
    invalidOptions.push(document.getElementById("standard-blends"));
    invalidOptions.push(document.getElementById("deluxe-blends"));
    invalidOptions.push(document.getElementById("splatter"));
    invalidOptions.push(document.getElementById("two-color"));
    invalidOptions.push(document.getElementById("picture-disc"));
    invalidOptions.push(document.getElementById("splatter-options-container"));

    setElementsDisplay(invalidOptions, "none");

    clearInput(splatterColorsInput, "splatterColors");
    clearInput(splatterColorOneInput, "splatterOneColorName");
    clearInput(splatterColorTwoInput, "splatterTwoColorName");
    clearInput(splatterColorThreeInput, "splatterThreeColorName");

    if (
      selected.recordType !== "black" &&
      selected.recordType !== "solids-translucent" &&
      selected.recordType !== "solids-opaque" &&
      selected.recordType !== "solids-neon"
    ) {
      clearInput(recordTypeInput, "recordType");
      clearInput(recordColorInput, "recordColorName");

      recordColorButton.classList.remove("color-selected");
      recordColorButton.style.backgroundColor = "#f2efec";
      setRecordBackground();
    }
  } else {
    const validOptions = [];
    validOptions.push(document.getElementById("eco-mix"));
    validOptions.push(document.getElementById("standard-blends"));
    validOptions.push(document.getElementById("deluxe-blends"));
    validOptions.push(document.getElementById("splatter"));
    validOptions.push(document.getElementById("two-color"));
    validOptions.push(document.getElementById("picture-disc"));

    setElementsDisplay(validOptions, "block");
  }
}

const colorContainerMap = {
  "eco-mix": "ecomix-options-container",
  "solids-translucent": "soilds-translucent-options-container",
  "solids-opaque": "soilds-opaque-options-container",
  "solids-neon": "soilds-opaque-options-container", // Neon uses same container as opaque
  "standard-blends": "standard-blends-options-container",
  "deluxe-blends": "deluxe-blends-options-container",
  splatter: "soilds-translucent-options-container",
  "two-color": "soilds-translucent-options-container",
};

function setValidColorOptions() {
  if (
    selected.recordType === "black" ||
    selected.recordType === "picture-disc"
  ) {
    return;
  }

  if (!colorContainerMap[selected.recordType]) {
    return;
  }

  setElementsDisplay(Array.from(memphisColorOptionsContainer.children), "none");
  const colorContainer = document.getElementById(
    colorContainerMap[selected.recordType]
  );
  if (colorContainer) {
    setElementsDisplay([colorContainer], "block");
  }
}

function setJacketOptions() {
  if (selected.recordSize === "7") {
    setElementsDisplay([document.getElementById("wide-spine")], "none");
    setElementsDisplay([document.getElementById("gatefold")], "none");

    if (
      selected.jacketType === "wide-spine" ||
      selected.jacketType === "gatefold"
    ) {
      clearInput(jacketTypeInput, ["jacketType"]);
    }
  } else {
    setElementsDisplay([document.getElementById("gatefold")], "flex");
    setElementsDisplay([document.getElementById("wide-spine")], "flex");
  }
}

downloadCardsTypeInput.addEventListener("change", () => {
  updateSelectedState(downloadCardsTypeInput, "downloadCardType");

  getDownloadCardsPrice();
  getTotalPrice();
});

recordCuttingInput.addEventListener("change", () => {
  updateSelectedState(recordCuttingInput, "recordCutting");

  getAllPrices();
  getTotalPrice();
});

recordSizeInput.addEventListener("change", () => {
  updateSelectedState(recordSizeInput, "recordSize");

  if (selected.recordSize === "7") {
    const invalidOptions = [];
    invalidOptions.push(document.getElementById("heavyweight"));
    invalidOptions.push(document.getElementById("insert-12x12"));
    invalidOptions.push(document.getElementById("insert-24x12"));
    invalidOptions.push(document.getElementById("anti-static"));

    const validOptions = [];
    validOptions.push(document.getElementById("insert-7x7"));
    validOptions.push(document.getElementById("insert-14x7"));

    setElementsDisplay(invalidOptions, "none");
    setElementsDisplay(validOptions, "block");

    // check to make sure none of the invalid selections are currently selected
    if (selected.recordWeight === "heavyweight") {
      clearInput(recordWeightInput, "recordWeight");
    }

    if (
      selected.printedInsertType === "12x12" ||
      selected.printedInsertType === "24x12"
    ) {
      clearInput(printedInsertTypeInput, "printedInsertType");
    }

    if (selected.innerSleeveType === "anti-static") {
      clearInput(innerSleeveTypeInput, "innerSleeveType");
    }
  } else {
    // record size === 12 or 10
    setElementsDisplay([document.getElementById("heavyweight")], "block");

    const validOptions = [];
    validOptions.push(document.getElementById("insert-12x12"));
    validOptions.push(document.getElementById("insert-24x12"));
    validOptions.push(document.getElementById("anti-static"));

    const invalidOptions = [];
    invalidOptions.push(document.getElementById("insert-7x7"));
    invalidOptions.push(document.getElementById("insert-14x7"));

    setElementsDisplay(invalidOptions, "none");
    setElementsDisplay(validOptions, "block");

    // check to make sure none of the invalid selections are currently selected
    if (
      selected.printedInsertType === "7x7" ||
      selected.printedInsertType === "14x7"
    ) {
      clearInput(printedInsertTypeInput, "printedInsertType");
    }
  }

  setRecordTypeBasedOnSize();
  setJacketOptions();
  getAllPrices();
  getTotalPrice();
});

amountInput.addEventListener("change", () => {
  updateSelectedState(amountInput, "amount");

  getAllPrices();
  getTotalPrice();
});

recordTypeInput.addEventListener("change", () => {
  updateSelectedState(recordTypeInput, "recordType");
  setValidColorOptions();

  if (recordTypeInput.value === "black") {
    setElementsDisplay(
      [recordColorOptionContainer, splatterOptionsContainer],
      "none"
    );
    // Hide and clear picture disc upload if it exists
    const pictureDiscUploadContainer = document.getElementById(
      "picture-disc-upload-container"
    );
    if (pictureDiscUploadContainer) {
      setElementsDisplay([pictureDiscUploadContainer], "none");
      if (pictureDiscUpload) {
        pictureDiscUpload.value = "";
        if (pictureDiscFilenameDisplay) {
          setElementsDisplay(
            [pictureDiscFilenameDisplay.parentElement],
            "none"
          );
          pictureDiscFilenameDisplay.innerText = "";
        }
      }
    }
    setInputsRequiredFalse([recordColorInput]);

    clearInput(splatterColorsInput, "splatterColors");
    clearInput(splatterColorOneInput, "splatterOneColorName");
    clearInput(splatterColorTwoInput, "splatterTwoColorName");
    clearInput(splatterColorThreeInput, "splatterThreeColorName");

    clearSelectedColors();
    setRecordBackground();
  } else if (recordTypeInput.value === "splatter") {
    clearSelectedColors();
    // Hide and clear picture disc upload if it exists
    const pictureDiscUploadContainer = document.getElementById(
      "picture-disc-upload-container"
    );
    if (pictureDiscUploadContainer) {
      setElementsDisplay([pictureDiscUploadContainer], "none");
      if (pictureDiscUpload) {
        pictureDiscUpload.value = "";
        if (pictureDiscFilenameDisplay) {
          setElementsDisplay(
            [pictureDiscFilenameDisplay.parentElement],
            "none"
          );
          pictureDiscFilenameDisplay.innerText = "";
        }
        // Reset record disc images to default
        const recordDisc1 = document.getElementById("builder-record-display");
        const recordDisc2 = document.getElementById("builder-record-display-2");
        const recordDisc3 = document.getElementById("builder-record-display-3");
        const defaultImage = DEFAULT_RECORD_IMAGE;
        const discs = [
          recordDisc1,
          recordDisc2,
          recordDisc3,
          mobileRecordVisualDisplay,
        ];
        discs.forEach((disc) => {
          if (disc) {
            disc.style.backgroundImage = defaultImage;
            disc.style.backgroundSize = "contain";
          }
        });
      }
    }
    setElementsDisplay(
      [splatterOptionsContainer, recordColorOptionContainer],
      "block"
    );
    setInputsRequiredTrue([
      splatterColorsInput,
      recordColorInput,
      splatterColorOneInput,
    ]);
    setInputsRequiredFalse([splatterColorTwoInput, splatterColorThreeInput]);
    splatterColorsInput.value = "1";
    selected.splatterColors = "1";

    setElementsDisplay(
      [splatterColorOneLabel, splatterColorOneButton],
      "block"
    );

    setElementsDisplay(
      [
        splatterColorThreeLabel,
        splatterColorThreeButton,
        splatterColorTwoLabel,
        splatterColorTwoButton,
      ],
      "none"
    );

    splatterColorTwoButton.style.backgroundColor = "#f2efec";
    splatterColorTwoButton.classList.remove("color-selected");
    splatterColorThreeButton.style.backgroundColor = "#f2efec";
    splatterColorThreeButton.classList.remove("color-selected");

    selected.splatterTwoColorName = null;
    selected.splatterThreeColorName = null;
  } else if (recordTypeInput.value === "picture-disc") {
    // Picture disc - show upload field, hide color picker
    setElementsDisplay([recordColorOptionContainer], "none");
    setElementsDisplay([splatterOptionsContainer], "none");
    const pictureDiscUploadContainer = document.getElementById(
      "picture-disc-upload-container"
    );
    if (pictureDiscUploadContainer) {
      pictureDiscUploadContainer.style.display = "block";
      pictureDiscUploadContainer.style.setProperty(
        "display",
        "block",
        "important"
      );
      setElementsDisplay([pictureDiscUploadContainer], "block");
    } else {
      console.error("Picture disc upload container not found!");
    }
    setInputsRequiredFalse([recordColorInput]);

    clearInput(splatterColorsInput, "splatterColors");
    clearInput(splatterColorOneInput, "splatterOneColorName");
    clearInput(splatterColorTwoInput, "splatterTwoColorName");
    clearInput(splatterColorThreeInput, "splatterThreeColorName");

    clearSelectedColors();
  } else {
    setElementsDisplay([recordColorOptionContainer], "block");
    setElementsDisplay([splatterOptionsContainer], "none");
    const pictureDiscUploadContainer = document.getElementById(
      "picture-disc-upload-container"
    );
    if (pictureDiscUploadContainer) {
      setElementsDisplay([pictureDiscUploadContainer], "none");
      // Clear the picture disc upload file
      if (pictureDiscUpload) {
        pictureDiscUpload.value = "";
        // Clear the file display
        if (pictureDiscFilenameDisplay) {
          setElementsDisplay(
            [pictureDiscFilenameDisplay.parentElement],
            "none"
          );
          pictureDiscFilenameDisplay.innerText = "";
        }
        // Reset record disc images to default
        const recordDisc1 = document.getElementById("builder-record-display");
        const recordDisc2 = document.getElementById("builder-record-display-2");
        const recordDisc3 = document.getElementById("builder-record-display-3");
        const defaultImage = DEFAULT_RECORD_IMAGE;
        const discs = [
          recordDisc1,
          recordDisc2,
          recordDisc3,
          mobileRecordVisualDisplay,
        ];
        discs.forEach((disc) => {
          if (disc) {
            disc.style.backgroundImage = defaultImage;
            disc.style.backgroundSize = "contain";
          }
        });
      }
    }
    setInputsRequiredTrue([recordColorInput]);

    clearInput(splatterColorsInput, "splatterColors");
    clearInput(splatterColorOneInput, "splatterOneColorName");
    clearInput(splatterColorTwoInput, "splatterTwoColorName");
    clearInput(splatterColorThreeInput, "splatterThreeColorName");

    clearSelectedColors();
  }

  getAllPrices();
  getTotalPrice();
});

splatterColorsInput.addEventListener("change", () => {
  updateSelectedState(splatterColorsInput, "splatterColors");

  if (selected.splatterColors === "1") {
    setElementsDisplay(
      [splatterColorOneLabel, splatterColorOneButton],
      "block"
    );
    setInputsRequiredFalse([splatterColorTwoInput, splatterColorThreeInput]);
    setInputsRequiredTrue([splatterColorOneInput]);

    setElementsDisplay(
      [
        splatterColorThreeLabel,
        splatterColorThreeButton,
        splatterColorTwoLabel,
        splatterColorTwoButton,
      ],
      "none"
    );

    splatterColorTwoButton.style.backgroundColor = "#f2efec";
    splatterColorTwoButton.classList.remove("color-selected");
    splatterColorThreeButton.style.backgroundColor = "#f2efec";
    splatterColorThreeButton.classList.remove("color-selected");

    selected.splatterTwoColorName = null;
    selected.splatterThreeColorName = null;
  } else if (selected.splatterColors === "2") {
    setInputsRequiredTrue([splatterColorOneInput, splatterColorTwoInput]);
    setInputsRequiredFalse([splatterColorThreeInput]);
    setElementsDisplay(
      [
        splatterColorOneLabel,
        splatterColorOneButton,
        splatterColorTwoLabel,
        splatterColorTwoButton,
      ],
      "block"
    );

    setElementsDisplay(
      [splatterColorThreeLabel, splatterColorThreeButton],
      "none"
    );

    splatterColorThreeButton.style.backgroundColor = "#f2efec";
    splatterColorThreeButton.classList.remove("color-selected");

    selected.splatterThreeColorName = null;
  } else {
    setInputsRequiredTrue([
      splatterColorOneInput,
      splatterColorTwoInput,
      splatterColorThreeInput,
    ]);
    setElementsDisplay(
      [
        splatterColorOneLabel,
        splatterColorOneButton,
        splatterColorTwoLabel,
        splatterColorTwoButton,
        splatterColorThreeLabel,
        splatterColorThreeButton,
      ],
      "block"
    );
  }

  getSurchargePrice();
  getSetupFeePrice();
  getTotalPrice();
});

jacketTypeInput.addEventListener("change", () => {
  updateSelectedState(jacketTypeInput, "jacketType");
  getInsertionPrice();
  getJacketPrice();
  getTotalPrice();
});

labelTypeInput.addEventListener("change", () => {
  updateSelectedState(labelTypeInput, "labelType");

  let allInputs = Array.from(labelUploadContainer.querySelectorAll("input"));
  allInputs.push(...labelUploadContainer.querySelectorAll("select"));

  if (labelTypeInput.value === "blank") {
    setElementsDisplay([labelUploadContainer], "none");
    setElementsDisplay([labelColorOptionsContainer], "block");
    let requiredInputs = labelColorOptionsContainer.querySelectorAll("select");

    setInputsRequiredTrue(requiredInputs);
    allInputs.forEach((input) => {
      clearInput(input, "");
    });

    setInputsRequiredFalse(allInputs);

    // remove file upload display if any
    const fileUploadDisplays = labelUploadContainer.querySelectorAll(
      ".file-upload-display"
    );
    setElementsDisplay(fileUploadDisplays, "none");
  } else {
    let requiredInputs = labelUploadContainer.querySelectorAll("select");
    setElementsDisplay([labelUploadContainer], "block");
    setElementsDisplay([labelColorOptionsContainer], "none");

    setInputsRequiredTrue(requiredInputs);

    allInputs.forEach((input) => {
      clearInput(input, "labelColor");
    });

    setInputsRequiredFalse(allInputs);
  }

  getCenterLabelPrice();
  getTotalPrice();
});

innerSleeveTypeInput.addEventListener("change", () => {
  updateSelectedState(innerSleeveTypeInput, "innerSleeveType");

  let allInputs = Array.from(sleeveOptionsContainer.querySelectorAll("input"));
  allInputs.push(...sleeveOptionsContainer.querySelectorAll("select"));

  if (innerSleeveTypeInput.value === "anti-static") {
    setElementsDisplay([sleeveOptionsContainer], "none");

    allInputs.forEach((input) => {
      clearInput(input, "innerSleeveColor");
    });
    selected.innerSleeveFinish = null;

    setInputsRequiredFalse(allInputs);

    // remove file upload display if any
    const fileUploadDisplays = sleeveOptionsContainer.querySelectorAll(
      ".file-upload-display"
    );
    setElementsDisplay(fileUploadDisplays, "none");
  } else if (innerSleeveTypeInput.value === "printed") {
    setElementsDisplay([sleeveOptionsContainer], "block");
    allInputs.forEach((input) => {
      clearInput(input, "innerSleeveColor");
    });

    setInputsRequiredTrue(allInputs);
    setElementsDisplay(
      [
        document.getElementById("sleeve-white"),
        document.getElementById("sleeve-black"),
      ],
      "none"
    );
    setElementsDisplay(
      [
        document.getElementById("sleeve-black-white"),
        document.getElementById("sleeve-full-color"),
      ],
      "block"
    );

    setElementsDisplay([innerSleeveUploadContainer], "block");
  } else {
    // one of the paper options is selected
    if (
      selected.innerSleeveColor !== "white" &&
      selected.innerSleeveColor !== "black"
    ) {
      allInputs.forEach((input) => {
        clearInput(input, "innerSleeveColor");
      });
      selected.innerSleeveFinish = null;
    }

    setElementsDisplay(
      [
        document.getElementById("sleeve-white"),
        document.getElementById("sleeve-black"),
      ],
      "block"
    );
    setElementsDisplay(
      [
        document.getElementById("sleeve-black-white"),
        document.getElementById("sleeve-full-color"),
      ],
      "none"
    );

    setInputsRequiredTrue(allInputs);
    clearInput(innerSleeveUploadContainer.querySelector("input"), []);
    const fileUploadDisplays = sleeveOptionsContainer.querySelectorAll(
      ".file-upload-display"
    );

    setElementsDisplay([sleeveOptionsContainer], "block");
    setElementsDisplay(
      [innerSleeveUploadContainer, ...fileUploadDisplays],
      "none"
    );
  }

  getInnerSleevePrice();
  getTotalPrice();
});

printedInsertTypeInput.addEventListener("change", () => {
  updateSelectedState(printedInsertTypeInput, "printedInsertType");

  let allInputs = Array.from(insertOptionsContainer.querySelectorAll("input"));
  allInputs.push(...insertOptionsContainer.querySelectorAll("select"));

  if (printedInsertTypeInput.value === "none") {
    setElementsDisplay([insertOptionsContainer], "none");

    allInputs.forEach((input) => {
      clearInput(input, "");
    });
    selected.printedInsertColor = null;
    selected.printedInsertSides = null;
    selected.printedInsertFinish = null;

    setInputsRequiredFalse(allInputs);

    // remove file upload display if any
    const fileUploadDisplays = insertOptionsContainer.querySelectorAll(
      ".file-upload-display"
    );
    setElementsDisplay(fileUploadDisplays, "none");
  } else {
    setElementsDisplay([insertOptionsContainer], "block");

    setInputsRequiredTrue(allInputs);
  }

  getInsertionPrice();
  getInsertPrice();
  getTotalPrice();
});

outerWrapTypeInput.addEventListener("change", () => {
  updateSelectedState(outerWrapTypeInput, "outerWrapType");

  getInsertionPrice();
  getOuterwrapPrice();
  getTotalPrice();
});

recordWeightInput.addEventListener("change", () => {
  updateSelectedState(recordWeightInput, "recordWeight");

  getAllPrices();
  getTotalPrice();
});

jacketColorInput.addEventListener("change", () => {
  updateSelectedState(jacketColorInput, "jacketColor");

  getJacketPrice();
  getTotalPrice();
});

jacketFinishInput.addEventListener("change", () => {
  updateSelectedState(jacketFinishInput, "jacketFinish");

  getJacketPrice();
  getTotalPrice();
});

innerSleeveColorInput.addEventListener("change", () => {
  updateSelectedState(innerSleeveColorInput, "innerSleeveColor");

  getInnerSleevePrice();
  getTotalPrice();
});

innerSleeveFinishInput.addEventListener("change", () => {
  updateSelectedState(innerSleeveFinishInput, "innerSleeveFinish");

  getInnerSleevePrice();
  getTotalPrice();
});

printedInsertSidesInput.addEventListener("change", () => {
  updateSelectedState(printedInsertSidesInput, "printedInsertSides");

  getInsertPrice();
  getTotalPrice();
});

printedInsertColorInput.addEventListener("change", () => {
  updateSelectedState(printedInsertColorInput, "printedInsertColor");

  getInsertPrice();
  getTotalPrice();
});

printedInsertFinishInput.addEventListener("change", () => {
  updateSelectedState(printedInsertFinishInput, "printedInsertFinish");

  getInsertPrice();
  getTotalPrice();
});

labelColorInput.addEventListener("change", () => {
  updateSelectedState(labelColorInput, "labelColor");
});

// other inputs and ui
projectTitleInput.addEventListener("input", () => {
  selected.projectTitle = projectTitleInput.value;
});

quantityInput.addEventListener("input", () => {
  selected.quantity = quantityInput.value;
});

mobileQuantityInput.addEventListener("input", () => {
  selected.quantity = mobileQuantityInput.value;
});

quantityInput.addEventListener("change", () => {
  setJacketOptions();
  getAllPrices();
  getTotalPrice();
});

mobileQuantityInput.addEventListener("change", () => {
  setJacketOptions();
  getAllPrices();
  getTotalPrice();
});

recordColorButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!selected.recordType) {
    return;
  }
  recordColorPicker.classList.toggle("visible");

  splatterColorOnePickerContainer.classList.remove("visible");
  splatterColorTwoPickerContainer.classList.remove("visible");
  splatterColorThreePickerContainer.classList.remove("visible");
});

splatterColorOneButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!selected.recordType) {
    return;
  }
  splatterColorOnePickerContainer.classList.toggle("visible");

  splatterColorTwoPickerContainer.classList.remove("visible");
  splatterColorThreePickerContainer.classList.remove("visible");
  recordColorPicker.classList.remove("visible");
});

splatterColorTwoButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!selected.recordType) {
    return;
  }
  splatterColorTwoPickerContainer.classList.toggle("visible");

  splatterColorOnePickerContainer.classList.remove("visible");
  splatterColorThreePickerContainer.classList.remove("visible");
  recordColorPicker.classList.remove("visible");
});

splatterColorThreeButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!selected.recordType) {
    return;
  }
  splatterColorThreePickerContainer.classList.toggle("visible");

  splatterColorOnePickerContainer.classList.remove("visible");
  splatterColorTwoPickerContainer.classList.remove("visible");
  recordColorPicker.classList.remove("visible");
});

recordColorPicker.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.classList.contains("memphis-color-option")) {
    let colorName = e.target.getAttribute("data-name");
    let imageUrl = e.target.getAttribute("data-image-url");

    recordColorNameDisplay.innerText = colorName;
    recordColorNameDisplay.parentElement.style.color = "black";

    recordColorPicker.classList.remove("visible");
    recordColorButton.classList.add("color-selected");

    recordColorInput.value = colorName;

    if (selected.recordType !== "eco-mix") {
      setRecordBackground(`url(${imageUrl})`);
    }

    selected.recordColorName = colorName;

    getRecordPrice();
    getTotalPrice();
  }
});

splatterColorOnePickerContainer.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.classList.contains("memphis-color-option")) {
    let colorName = e.target.getAttribute("data-name");

    splatterColorOneDisplay.innerText = colorName;
    splatterColorOneDisplay.parentElement.style.color = "black";

    splatterColorOnePickerContainer.classList.remove("visible");
    splatterColorOneButton.classList.add("color-selected");

    splatterColorOneInput.value = colorName;

    selected.splatterOneColorName = colorName;
  }
});

splatterColorTwoPickerContainer.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.classList.contains("memphis-color-option")) {
    let colorName = e.target.getAttribute("data-name");

    splatterColorTwoDisplay.innerText = colorName;
    splatterColorTwoDisplay.parentElement.style.color = "black";

    splatterColorTwoPickerContainer.classList.remove("visible");
    splatterColorTwoButton.classList.add("color-selected");

    splatterColorTwoInput.value = colorName;

    selected.splatterTwoColorName = colorName;
  }
});

splatterColorThreePickerContainer.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.classList.contains("memphis-color-option")) {
    let colorName = e.target.getAttribute("data-name");

    splatterColorThreeDisplay.innerText = colorName;
    splatterColorThreeDisplay.parentElement.style.color = "black";

    splatterColorThreePickerContainer.classList.remove("visible");
    splatterColorThreeButton.classList.add("color-selected");

    splatterColorThreeInput.value = colorName;

    selected.splatterThreeColorName = colorName;
  }
});

// file upload logic
jacketFrontUpload.addEventListener("change", () => {
  let file = jacketFrontUpload.files[0];

  if (file) {
    let imageUrl = URL.createObjectURL(file);
    setElementsDisplay([jacketFrontFilenameDisplay.parentElement], "block");
    jacketFrontFilenameDisplay.innerText = file.name;
    setJacketBackground(`url(${imageUrl})`);
  } else {
    setElementsDisplay([jacketFrontFilenameDisplay.parentElement], "none");
    setJacketBackground("");
  }
});

labelFrontUpload.addEventListener("change", () => {
  let file = labelFrontUpload.files[0];

  if (file) {
    setElementsDisplay([labelFrontFilenameDisplay.parentElement], "block");
    labelFrontFilenameDisplay.innerText = file.name;
  } else {
    setElementsDisplay([labelFrontFilenameDisplay.parentElement], "none");
  }
});

if (pictureDiscUpload) {
  pictureDiscUpload.addEventListener("change", () => {
    let file = pictureDiscUpload.files[0];

    if (file) {
      let imageUrl = URL.createObjectURL(file);
      setElementsDisplay([pictureDiscFilenameDisplay.parentElement], "block");
      pictureDiscFilenameDisplay.innerText = file.name;
      // Display on all record discs
      const recordDisc1 = document.getElementById("builder-record-display");
      const recordDisc2 = document.getElementById("builder-record-display-2");
      const recordDisc3 = document.getElementById("builder-record-display-3");

      const discs = [
        recordDisc1,
        recordDisc2,
        recordDisc3,
        mobileRecordVisualDisplay,
      ];
      discs.forEach((disc) => {
        if (disc) {
          disc.style.backgroundImage = `url(${imageUrl})`;
          disc.style.backgroundSize = "cover";
          disc.style.backgroundPosition = "center";
          disc.style.backgroundRepeat = "no-repeat";
        }
      });
    } else {
      setElementsDisplay([pictureDiscFilenameDisplay.parentElement], "none");
      // Reset to default black record
      const defaultImage = DEFAULT_RECORD_IMAGE;
      const recordDisc1 = document.getElementById("builder-record-display");
      const recordDisc2 = document.getElementById("builder-record-display-2");
      const recordDisc3 = document.getElementById("builder-record-display-3");

      const discs = [
        recordDisc1,
        recordDisc2,
        recordDisc3,
        mobileRecordVisualDisplay,
      ];
      discs.forEach((disc) => {
        if (disc) {
          disc.style.backgroundImage = defaultImage;
          disc.style.backgroundSize = "contain";
        }
      });
    }
  });
}

innerSleeveUpload.addEventListener("change", () => {
  let file = innerSleeveUpload.files[0];

  if (file) {
    setElementsDisplay([sleeveFilenameDisplay.parentElement], "block");
    sleeveFilenameDisplay.innerText = file.name;
  } else {
    setElementsDisplay([sleeveFilenameDisplay.parentElement], "none");
  }
});

printedInsertUpload.addEventListener("change", () => {
  let file = printedInsertUpload.files[0];

  if (file) {
    setElementsDisplay([insertFilenameDisplay.parentElement], "block");
    insertFilenameDisplay.innerText = file.name;
  } else {
    setElementsDisplay([insertFilenameDisplay.parentElement], "none");
  }
});

// upload file remove event listeners
removeJacketFrontImage.addEventListener("click", () => {
  jacketFrontUpload.value = "";

  setElementsDisplay([jacketFrontFilenameDisplay.parentElement], "none");
  setJacketBackground("");
});

if (removePictureDiscImage && pictureDiscUpload) {
  removePictureDiscImage.addEventListener("click", () => {
    pictureDiscUpload.value = "";
    setElementsDisplay([pictureDiscFilenameDisplay.parentElement], "none");
    // Reset to default black record
    const defaultImage = DEFAULT_RECORD_IMAGE;
    const recordDisc1 = document.getElementById("builder-record-display");
    const recordDisc2 = document.getElementById("builder-record-display-2");
    const recordDisc3 = document.getElementById("builder-record-display-3");

    const discs = [
      recordDisc1,
      recordDisc2,
      recordDisc3,
      mobileRecordVisualDisplay,
    ];
    discs.forEach((disc) => {
      if (disc) {
        disc.style.backgroundImage = defaultImage;
        disc.style.backgroundSize = "contain";
      }
    });
    // Trigger change event to update display
    pictureDiscUpload.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

removeLabelFrontImage.addEventListener("click", () => {
  labelFrontUpload.value = "";

  setElementsDisplay([labelFrontFilenameDisplay.parentElement], "none");
});

removeSleeveImage.addEventListener("click", () => {
  innerSleeveUpload.value = "";

  setElementsDisplay([sleeveFilenameDisplay.parentElement], "none");
});

removeInsertImage.addEventListener("click", () => {
  printedInsertUpload.value = "";

  setElementsDisplay([insertFilenameDisplay.parentElement], "none");
});

// functions to reset certain inputs and
function clearSelectedColors() {
  setRecordBackground();

  // clear color inputs of previously selected values
  recordColorInput.value = "";

  recordColorButton.style.backgroundColor = "#f2efec";
  recordColorButton.classList.remove("color-selected");

  clearSplatterColors();
}

function clearSplatterColors() {
  splatterColorOneButton.style.backgroundColor = "#f2efec";
  splatterColorOneButton.classList.remove("color-selected");

  splatterColorTwoButton.style.backgroundColor = "#f2efec";
  splatterColorTwoButton.classList.remove("color-selected");

  splatterColorThreeButton.style.backgroundColor = "#f2efec";
  splatterColorThreeButton.classList.remove("color-selected");

  selected.recordColorName = null;
  selected.splatterOneColorName = null;
  selected.splatterTwoColorName = null;
  selected.splatterThreeColorName = null;
}

// modal logic
pricingBreakdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  document.body.style.overflow = "hidden";

  modalBackground.classList.add("visible");
  getAllPrices();
  getTotalPrice();
  updatePricingBreakdownDisplays();
});

pricingBreakdownButtonMobile.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  document.body.style.overflow = "hidden";

  modalBackground.classList.add("visible");
  getAllPrices();
  getTotalPrice();
  updatePricingBreakdownDisplays();
});

builderSubmitButton.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  modalBackground.classList.remove("visible");
});

continueEditingButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  document.body.style.overflow = "auto";
  modalBackground.classList.remove("visible");
});

function formatPrice(num) {
  num = parseFloat(num);

  if (isNaN(num)) {
    return "0.00";
  }

  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function updatePricingBreakdownDisplays() {
  if (typeof window !== "undefined") {
    window.debugInsertionBreakdown = () => {
      console.table({
        insertionPrice,
        insertionOfRecordPrice,
        insertionOfInnerSleevePrice,
        insertionOfPrintedInsertPrice,
        insertionOfJacketPrice,
        selectedAmount: selected.amount,
        selectedJacketType: selected.jacketType,
        selectedOuterWrapType: selected.outerWrapType,
        selectedPrintedInsertType: selected.printedInsertType,
        selectedQuantity: selected.quantity,
      });
    };
  }

  projectTitleDisplay.innerText = selected.projectTitle || "Project Title";
  setupFeeBreakdownDisplay.innerText = "$" + formatPrice(setupPrice);
  cuttingFeeBreakdownDisplay.innerText = "$" + formatPrice(cuttingPrice);
  platingFeeBreakdownDisplay.innerText = "$" + formatPrice(platingPrice);
  stampersFeeBreakdownDisplay.innerText = "$" + formatPrice(stampersPrice);
  centerLabelFeeBreakdownDisplay.innerText =
    "$" + formatPrice(centerLabelsPrice);
  recordsFeeBreakdownDisplay.innerText = "$" + formatPrice(recordPrice);
  innerSleeveFeeBreakdownDisplay.innerText =
    "$" + formatPrice(innerSleevePrice);
  jacketFeeBreakdownDisplay.innerText = "$" + formatPrice(jacketsPrice);
  insertFeeBreakdownDisplay.innerText = "$" + formatPrice(insertsPrice);
  outerwrapFeeBreakdownDisplay.innerText = "$" + formatPrice(outerwrapPrice);
  downloadCardsFeeBreakdownDisplay.innerText =
    "$" + formatPrice(downloadCardsPrice);
  miscFeeBreakdownDisplay.innerText = "$" + formatPrice(miscPrice);
  insertionFeeBreakdownDisplay.innerText = "$" + formatPrice(insertionPrice);

  // update sub-item prices
  setupFeeBreakdownOptionPriceDisplay.innerText = "$" + formatPrice(setupPrice);
  cuttingBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(cuttingPrice);
  platingBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(platingPrice);
  testPressingsInitialPriceDisplay.innerText =
    "$" + formatPrice(testPressingsPrice);
  testPressingsShippingPriceDisplay.innerText =
    "$" + formatPrice(testPressingsShippingPrice);
  centerLabelBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(centerLabelsPrice);
  recordBreakdownOptionsPriceDisplay.innerText = "$" + formatPrice(recordPrice);
  sleeveBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(innerSleevePrice);
  jacketBreakdownOptionPriceDisplay.innerText = "$" + formatPrice(jacketsPrice);
  insertBreakdownOptionPriceDisplay.innerText = "$" + formatPrice(insertsPrice);
  outerwrapBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(outerwrapPrice);
  downloadCardBreakdownOptionPriceDisplay.innerText =
    "$" + formatPrice(downloadCardsPrice);
  insertionOfRecordPriceDisplay.innerText =
    "$" + formatPrice(insertionOfRecordPrice);
  insertionOfSleevePriceDisplay.innerText =
    "$" + formatPrice(insertionOfInnerSleevePrice);
  insertionOfInsertPriceDisplay.innerText =
    "$" + formatPrice(insertionOfPrintedInsertPrice);
  insertionOfJacketPriceDisplay.innerText =
    "$" + formatPrice(insertionOfJacketPrice);
  splatterSurchargePriceDisplay.innerText = "$" + formatPrice(surchargePrice);

  // update inner text of all sub-item displays
  if (surchargePrice === 0) {
    splatterSurchargePriceDisplay.parentElement.style.display = "none";
  } else {
    splatterSurchargePriceDisplay.parentElement.style.display = "flex";
  }
  if (setupPrice === 0) {
    setupFeeBreakdownOptionDisplay.parentElement.style.display = "none";
  } else {
    setupFeeBreakdownOptionDisplay.parentElement.style.display = "flex";
    setupFeeBreakdownOptionDisplay.innerText =
      toTitleCase(selected.amount) + " LP";
  }
  if (cuttingPrice === 0) {
    cuttingFeeBreakdownDisplay.parentElement.style.display = "none";
    cuttingBreakdownOptionDisplay.parentElement.style.display = "none";
  } else {
    cuttingFeeBreakdownDisplay.parentElement.style.display = "flex";
    cuttingBreakdownOptionDisplay.parentElement.style.display = "flex";
    if (selected.recordCutting === "dmm") {
      cuttingBreakdownOptionDisplay.innerText = "DMM";
    } else {
      cuttingBreakdownOptionDisplay.innerText = toTitleCase(
        selected.recordCutting
      );
    }
  }
  if (platingPrice === 0) {
    platingFeeBreakdownDisplay.parentElement.style.display = "none";
    platingBreakdownOptionDisplay.parentElement.style.display = "none";
  } else {
    platingFeeBreakdownDisplay.parentElement.style.display = "flex";
    platingBreakdownOptionDisplay.parentElement.style.display = "flex";
    if (selected.recordCutting === "dmm") {
      platingBreakdownOptionDisplay.innerText = "DMM Plating";
    } else {
      platingBreakdownOptionDisplay.innerText = "2-Step Plating";
    }
  }
  if (stampersPrice === 0) {
    stampersFeeBreakdownDisplay.parentElement.style.display = "none";
  } else {
    stampersFeeBreakdownDisplay.parentElement.style.display = "flex";
  }
  if (centerLabelsPrice === 0) {
    centerLabelFeeBreakdownDisplay.parentElement.style.display = "none";
    centerLabelBreakdownOptionDisplay.parentElement.style.display = "none";
  } else {
    centerLabelFeeBreakdownDisplay.parentElement.style.display = "flex";
    centerLabelBreakdownOptionDisplay.parentElement.style.display = "flex";
    centerLabelBreakdownOptionDisplay.innerText = toTitleCase(
      selected.labelType
    );
  }
  if (recordPrice === 0) {
    recordsFeeBreakdownDisplay.parentElement.style.display = "none";
    recordBreakdownOptionsPriceDisplay.parentElement.style.display = "none";
  } else {
    recordsFeeBreakdownDisplay.parentElement.style.display = "flex";
    recordBreakdownOptionsPriceDisplay.parentElement.style.display = "flex";
    recordSizeBreakdownDisplay.innerText = selected.recordSize + " Inch";
    recordWeightBreakdownDisplay.innerText = toTitleCase(selected.recordWeight);
    recordTypeBreakdownDisplay.innerText = toTitleCase(selected.recordType);
  }
  if (innerSleevePrice === 0) {
    innerSleeveFeeBreakdownDisplay.parentElement.style.display = "none";
    sleeveBreakdownOptionPriceDisplay.parentElement.style.display = "none";
  } else {
    innerSleeveFeeBreakdownDisplay.parentElement.style.display = "flex";
    sleeveBreakdownOptionPriceDisplay.parentElement.style.display = "flex";
    sleeveTypeBreakdownDisplay.innerText = toTitleCase(
      selected.innerSleeveType
    );
    sleeveColorBreakdownDisplay.innerText = toTitleCase(
      selected.innerSleeveColor
    );
    sleeveFinishBreakdownDisplay.innerText = toTitleCase(
      selected.innerSleeveFinish
    );
  }
  if (jacketsPrice === 0) {
    jacketFeeBreakdownDisplay.parentElement.style.display = "none";
    jacketBreakdownOptionPriceDisplay.parentElement.style.display = "none";
  } else {
    jacketFeeBreakdownDisplay.parentElement.style.display = "flex";
    jacketBreakdownOptionPriceDisplay.parentElement.style.display = "flex";
    jacketTypeBreakdownDisplay.innerText = toTitleCase(selected.jacketType);
    jacketColorBreakdownDisplay.innerText = toTitleCase(selected.jacketColor);
    jacketFinishBreakdownDisplay.innerText = toTitleCase(selected.jacketFinish);
  }
  if (insertsPrice === 0) {
    insertFeeBreakdownDisplay.parentElement.style.display = "none";
    insertBreakdownOptionPriceDisplay.parentElement.style.display = "none";
  } else {
    insertFeeBreakdownDisplay.parentElement.style.display = "flex";
    insertBreakdownOptionPriceDisplay.parentElement.style.display = "flex";
    insertTypeBreakdownDisplay.innerText = toTitleCase(
      selected.printedInsertType
    );
    insertSidesBreakdownDisplay.innerText = toTitleCase(
      selected.printedInsertSides
    );
    insertColorBreakdownDisplay.innerText = toTitleCase(
      selected.printedInsertColor
    );
    insertFinishBreakdownDisplay.innerText = toTitleCase(
      selected.printedInsertFinish
    );
  }
  if (outerwrapPrice === 0) {
    outerwrapFeeBreakdownDisplay.parentElement.style.display = "none";
    outerwrapBreakdownOptionPriceDisplay.parentElement.style.display = "none";
  } else {
    outerwrapFeeBreakdownDisplay.parentElement.style.display = "flex";
    outerwrapBreakdownOptionPriceDisplay.parentElement.style.display = "flex";
    outerwrapBreakdownOptionDisplay.innerText = toTitleCase(
      selected.outerWrapType
    );
  }
  if (downloadCardsPrice === 0) {
    downloadCardsFeeBreakdownDisplay.parentElement.style.display = "none";
    downloadCardBreakdownOptionPriceDisplay.parentElement.style.display =
      "none";
  } else {
    downloadCardsFeeBreakdownDisplay.parentElement.style.display = "flex";
    downloadCardBreakdownOptionPriceDisplay.parentElement.style.display =
      "flex";
    downloadCardBreakdownOptionDisplay.innerText = toTitleCase(
      selected.downloadCardType
    );
  }
  if (miscPrice === 0) {
    miscFeeBreakdownDisplay.parentElement.style.display = "none";
  } else {
    miscFeeBreakdownDisplay.parentElement.style.display = "flex";
  }
  if (insertionPrice === 0) {
    insertionFeeBreakdownDisplay.parentElement.style.display = "none";
  } else {
    insertionFeeBreakdownDisplay.parentElement.style.display = "flex";
  }
  if (insertionOfRecordPrice === 0) {
    insertionOfRecordPriceDisplay.parentElement.style.display = "none";
  } else {
    insertionOfRecordPriceDisplay.parentElement.style.display = "flex";
  }
  if (insertionOfInnerSleevePrice === 0) {
    insertionOfSleevePriceDisplay.parentElement.style.display = "none";
  } else {
    insertionOfSleevePriceDisplay.parentElement.style.display = "flex";
  }
  if (insertionOfPrintedInsertPrice === 0) {
    insertionOfInsertPriceDisplay.parentElement.style.display = "none";
  } else {
    insertionOfInsertPriceDisplay.parentElement.style.display = "flex";
  }
  if (insertionOfJacketPrice === 0) {
    insertionOfJacketPriceDisplay.parentElement.style.display = "none";
  } else {
    insertionOfJacketPriceDisplay.parentElement.style.display = "flex";
  }

  orderTotalDisplay.innerText = "$" + formatPrice(totalPrice);
  orderTotalPerUnitDisplay.innerText =
    "$" + formatPrice(totalPrice / selected.quantity) + "/copy";
}

closeModalButton.addEventListener("click", (e) => {
  e.stopPropagation();

  document.body.style.overflow = "auto";
  modalBackground.classList.remove("visible");
});

breakdownContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalBackground.addEventListener("click", (e) => {
  e.stopPropagation();
});

function checkRequiredInputs() {
  const requiredFields = Array.from(
    document.querySelectorAll(
      "input[required], select[required], textarea[required]"
    )
  );

  let isComplete = true;

  requiredFields.forEach((field) => {
    if (!field.checkValidity()) {
      isComplete = false;
      setElementsDisplay([missingInfoContainer], "block");
      let arrow = `
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.6667L9 2" stroke="#F56412" stroke-width="2"/>
                    <path d="M17 10L9 2L1 10" stroke="#F56412" stroke-width="2"/>
                </svg>
            `;

      let p = document.createElement("p");
      p.innerHTML =
        arrow +
        "&nbsp;&nbsp;" +
        (field.getAttribute("data-display-name") ||
          field.getAttribute("name")?.replaceAll("-", " ") ||
          field.id);
      p.classList.add("missing-info-p");

      missingInfoDisplay.appendChild(p);

      p.addEventListener("click", () => scollToInput(field));
    }
  });

  if (isComplete) {
    setElementsDisplay([formVerificationSuccessDiv], "flex");
  } else {
    setElementsDisplay([formVerificationSuccessDiv], "none");
  }

  return isComplete;
}

prepareToSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  setElementsDisplay([missingInfoContainer], "none");

  Array.from(missingInfoDisplay.children).forEach((child) => {
    child.parentElement.removeChild(child);
  });

  const isComplete = checkRequiredInputs();

  document.body.style.overflow = "hidden";
  modalBackground.classList.add("visible");
  getAllPrices();
  getTotalPrice();
  updatePricingBreakdownDisplays();

  if (!isComplete) {
    formVerificationSuccessDiv.style.display = "none";
  }
});

function scollToInput(node) {
  let yOffset = node.getBoundingClientRect().y;
  let y = window.scrollY;

  window.scroll({ left: 0, top: y + yOffset - 200, behavior: "smooth" });
}

// pricing logic
let memphisPrices = null;

let surchargePrice = 0;
let setupPrice = 0;
let cuttingPrice = 0;
let platingPrice = 0;
let stampersPrice = 0;
let testPressingsPrice = 0;
let testPressingsShippingPrice = 0;
let centerLabelsPrice = 0;
let recordPrice = 0;
let innerSleevePrice = 0;
let jacketsPrice = 0;
let insertsPrice = 0;
let downloadCardsPrice = 0;
let outerwrapPrice = 0;
let insertionPrice = 0;
let insertionOfRecordPrice = 0;
let insertionOfInnerSleevePrice = 0;
let insertionOfPrintedInsertPrice = 0;
let insertionOfJacketPrice = 0;
let miscPrice = 0;

let totalPrice = 0;

const defaultMemphisBreakpoints = [
  "300",
  "500",
  "1000",
  "2000",
  "3000",
  "5000",
  "10000",
  "25000",
];

function getDefaultMemphisBreakpoint(num) {
  num = parseInt(num);

  if (num < defaultMemphisBreakpoints[0]) {
    return defaultMemphisBreakpoints[0];
  }

  for (let i = 1; i < defaultMemphisBreakpoints.length; i++) {
    if (num < parseInt(defaultMemphisBreakpoints[i])) {
      return defaultMemphisBreakpoints[i - 1];
    }
  }

  return defaultMemphisBreakpoints.at(-1);
}

async function fetchPrices() {
  try {
    let res = await fetch(
      "https://echobase-backend-v9fx.onrender.com/memphis-builder"
    );

    let data = await res.json();
    let memphisItems = data.data.boards[0].items_page.items;

    memphisPrices = {};
    memphisItems.forEach((item) => {
      let idCol = item.column_values.find((el) => el.id === "text5__1");
      let priceCol = item.column_values.find((el) => el.id === "numbers61__1");

      memphisPrices[idCol.text] = priceCol.text;
    });

    getAllPrices();
    getTotalPrice();
  } catch (err) {
    console.error(err);
    memphisPrices = null;
  }
}

function getSetupFeePrice() {
  if (!memphisPrices || !selected.amount) {
    setupPrice = 0;
    return;
  }

  if (selected.recordType === "splatter") {
    if (!selected.splatterColors) {
      setupPrice = 0;
    } else {
      setupPrice =
        parseFloat(memphisPrices["SU003"]) *
        parseFloat(selected.splatterColors);
    }
  } else if (selected.quantity < 500) {
    setupPrice = parseFloat(memphisPrices["SU001"]);
  } else {
    setupPrice = parseFloat(memphisPrices["SU002"]);
  }

  if (selected.recordType !== "splatter") {
    if (selected.amount === "double") {
      setupPrice *= 2;
    } else if (selected.amount === "triple") {
      setupPrice *= 3;
    }
  }

  if (isNaN(setupPrice)) {
    console.error("error getting set up fee price");
    setupPrice = 0;
  }
  // console.log("setupPrice", setupPrice)
}

function getSurchargePrice() {
  if (!memphisPrices || !selected.recordWeight) {
    surchargePrice = 0;
    return;
  }

  if (selected.recordType !== "splatter") {
    surchargePrice = 0;
    return;
  } else if (selected.recordWeight === "standard") {
    if (selected.quantity < 500) {
      surchargePrice =
        parseFloat(memphisPrices["SS002"]) * parseFloat(selected.quantity);
    } else {
      surchargePrice =
        parseFloat(memphisPrices["SS001"]) * parseFloat(selected.quantity);
    }
  } else {
    if (selected.quantity < 500) {
      surchargePrice =
        parseFloat(memphisPrices["SS004"]) * parseFloat(selected.quantity);
    } else {
      surchargePrice =
        parseFloat(memphisPrices["SS003"]) * parseFloat(selected.quantity);
    }
  }

  if (selected.amount === "double") {
    surchargePrice *= 2;
  } else if (selected.amount === "triple") {
    surchargePrice *= 3;
  }

  if (isNaN(surchargePrice)) {
    console.error("error getting surcharge price");
    surchargePrice = 0;
  }
}

const cuttingMap = {
  12: "12",
  10: "12",
  7: "07",
  "mrp supplied": "DMM",
};

function getCuttingPrice() {
  if (!memphisPrices || !selected.amount || !selected.recordCutting) {
    cuttingPrice = 0;
    return;
  }

  if (!selected.recordSize || selected.recordCutting === "customer supplied") {
    cuttingPrice = 0;
    return;
  }

  let lookupNumber =
    "CT" + cuttingMap[selected.recordSize] + cuttingMap[selected.recordCutting];

  if (selected.amount === "single") {
    cuttingPrice = parseFloat(memphisPrices[lookupNumber]);
  } else if (selected.amount === "double") {
    cuttingPrice = parseFloat(memphisPrices[lookupNumber]) * 2;
  } else {
    cuttingPrice = parseFloat(memphisPrices[lookupNumber]) * 3;
  }

  if (isNaN(cuttingPrice)) {
    console.error("error getting cutting price");
    cuttingPrice = 0;
  }
  // console.log("cuttingPrice", cuttingPrice)
}

const platingMap = {
  12: "12",
  10: "12",
  7: "07",
  "mrp supplied": "DMM",
};

function getPlatingPrice() {
  if (
    !memphisPrices ||
    !selected.amount ||
    !selected.recordCutting ||
    !selected.recordSize
  ) {
    platingPrice = 0;
    return;
  }
  if (selected.recordCutting === "customer supplied") {
    platingPrice = 0;
    return;
  }

  let loookupNumber =
    "PL" + platingMap[selected.recordSize] + platingMap[selected.recordCutting];

  if (selected.amount === "single") {
    platingPrice = parseFloat(memphisPrices[loookupNumber]);
  } else if (selected.amount === "double") {
    platingPrice = parseFloat(memphisPrices[loookupNumber]) * 2;
  } else {
    platingPrice = parseFloat(memphisPrices[loookupNumber]) * 3;
  }

  if (isNaN(platingPrice)) {
    console.error("error getting plating price");
    platingPrice = 0;
  }
  // console.log("platingPrice", platingPrice)
}

const stampersMap = {
  standard: "140G",
  heavyweight: "180G",
};

function getStampersPrice() {
  if (!memphisPrices || !selected.recordWeight) {
    stampersPrice = 0;
    return;
  }

  if (selected.quantity > 1000) {
    let additionalUnits = selected.quantity - 1000;
    let lookupNumber = "ST" + stampersMap[selected.recordWeight];

    stampersPrice = parseFloat(memphisPrices[lookupNumber]) * additionalUnits;
  } else {
    stampersPrice = 0;
    return;
  }

  if (selected.amount === "double") {
    stampersPrice *= 2;
  } else if (selected.amount === "triple") {
    stampersPrice *= 3;
  }

  if (isNaN(stampersPrice)) {
    console.error("error getting stampers price");
    stampersPrice = 0;
  }
  // console.log("stampersPrice", stampersPrice)
}

function getTestPressingsPrice() {
  testPressingsPrice = 0;
  testPressingsShippingPrice = 0;

  if (!memphisPrices) {
    return;
  }

  if (selected.testPressings === "0") {
    return;
  } else {
    testPressingsShippingPrice = parseFloat(memphisPrices["TP003"]);
    testPressingsPrice = parseFloat(memphisPrices["TP001"]);
  }

  if (selected.amount === "double") {
    testPressingsPrice *= 2;
  } else if (selected.amount === "triple") {
    testPressingsPrice *= 3;
  }

  if (isNaN(testPressingsPrice)) {
    console.error("error getting test pressings price");
    testPressingsPrice = 0;
  }
  if (isNaN(testPressingsShippingPrice)) {
    console.error("error getting test pressings shipping price");
    testPressingsShippingPrice = 0;
  }
  // console.log("testPressingsPrice", testPressingsPrice)
}

const labelMap = {
  "black and white": "BW",
  "full color": "FC",
};

function getCenterLabelPrice() {
  if (!memphisPrices || !selected.labelType) {
    centerLabelsPrice = 0;
    return;
  }

  if (selected.labelType === "blank") {
    centerLabelsPrice =
      parseFloat(memphisPrices["CL001"]) * parseFloat(selected.quantity);
  } else {
    let lookupNumber =
      "CL" +
      labelMap[selected.labelType] +
      getDefaultMemphisBreakpoint(selected.quantity);
    centerLabelsPrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  }

  if (selected.amount === "double") {
    centerLabelsPrice *= 2;
  } else if (selected.amount === "triple") {
    centerLabelsPrice *= 3;
  }

  if (isNaN(centerLabelsPrice)) {
    console.error("error getting center label price");
    centerLabelsPrice = 0;
  }
  // console.log("centerLabelsPrice", centerLabelsPrice)
}

const recordMap = {
  black: "CB",
  splatter: "TC",
  "picture-disc": "PD",
  7: "07R",
  12: "12R",
  10: "12R",
  standard: "SV",
  heavyweight: "HV",
  "eco-mix": "EM",
  "solids-translucent": "TC",
  "solids-opaque": "OC",
  "solids-neon": "NC",
  "standard-blends": "MB",
  "smoke-blends": "HB",
  "deluxe-blends": "HB",
  "metallic-blends": "HB",
  "cream-blends": "HB",
};

function getRecordPrice() {
  if (
    !memphisPrices ||
    !selected.recordSize ||
    !selected.recordType ||
    !selected.recordWeight
  ) {
    recordPrice = 0;
    return;
  }

  if (selected.recordColorName?.substring(0, 3) === "G01") {
    let lookupNumber = recordMap[selected.recordWeight] + "GC12R";
    if (selected.quantity < 500) {
      lookupNumber += "SR";
    }
    recordPrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  } else if (selected.recordSize === "12" || selected.recordSize === "10") {
    let lookupNumber =
      recordMap[selected.recordWeight] +
      recordMap[selected.recordType] +
      recordMap[selected.recordSize];

    if (selected.quantity < 500) {
      lookupNumber += "SR";
    }

    recordPrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  } else {
    // 7 inch record
    let lookupNumber =
      recordMap[selected.recordWeight] +
      recordMap[selected.recordType] +
      recordMap[selected.recordSize] +
      getDefaultMemphisBreakpoint(selected.quantity);

    recordPrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  }

  if (selected.amount === "double") {
    recordPrice *= 2;
  } else if (selected.amount === "triple") {
    recordPrice *= 3;
  }

  if (isNaN(recordPrice)) {
    console.error("error getting record price");
    recordPrice = 0;
  }
  // console.log("recordPrice", recordPrice)
}

const innerSleeveMap = {
  paper: "SP",
  "paper w/ poly lining": "PP",
  "anti-static": "AS",
  printed: "PR",
  white: "WH",
  black: "BL",
  "black & white": "BW",
  "full color": "FC",
  12: "12R",
  10: "12R",
  7: "07R",
};

function getInnerSleevePrice() {
  if (!memphisPrices || !selected.innerSleeveType) {
    innerSleevePrice = 0;
    return;
  }

  if (!selected.recordSize) {
    innerSleevePrice = 0;
    return;
  }

  if (selected.innerSleeveType === "paper") {
    if (!selected.innerSleeveColor) {
      innerSleevePrice = 0;
      return;
    }

    if (selected.innerSleeveColor === "white") {
      innerSleevePrice = 0;
    } else {
      let lookupNumber =
        "IS" +
        innerSleeveMap[selected.innerSleeveType] +
        innerSleeveMap[selected.innerSleeveColor] +
        innerSleeveMap[selected.recordSize];

      innerSleevePrice =
        parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
    }
  } else if (selected.innerSleeveType === "paper w/ poly lining") {
    if (!selected.innerSleeveColor) {
      innerSleevePrice = 0;
      return;
    }

    if (selected.innerSleeveColor === "white") {
      innerSleevePrice = 0;
    } else {
      innerSleevePrice =
        parseFloat(memphisPrices["ISPPBL12R"]) * parseFloat(selected.quantity);
    }
  } else if (selected.innerSleeveType === "printed") {
    if (!selected.innerSleeveColor) {
      innerSleevePrice = 0;
      return;
    }

    let lookupNumber =
      "IS" +
      innerSleeveMap[selected.innerSleeveType] +
      innerSleeveMap[selected.innerSleeveColor] +
      innerSleeveMap[selected.recordSize] +
      getDefaultMemphisBreakpoint(Math.min(selected.quantity, 10000));

    innerSleevePrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  } else if (selected.innerSleeveType === "anti-static") {
    innerSleevePrice =
      parseFloat(memphisPrices["ISAS12R"]) * parseFloat(selected.quantity);
  }

  if (selected.amount === "double") {
    innerSleevePrice *= 2;
  } else if (selected.amount === "triple") {
    innerSleevePrice *= 3;
  }

  if (isNaN(innerSleevePrice)) {
    console.error("error getting inner sleeve price");
    innerSleevePrice = 0;
  }
  // console.log("innerSleevePrice", innerSleevePrice)
}

const jacketMap = {
  "single pocket": "SP",
  "wide spine": "WS",
  gatefold: "GF",
  12: "12R",
  10: "12R",
  7: "07R",
  "black & white": "BW",
  "full color": "FC",
};

function getJacketPrice() {
  if (!memphisPrices || !selected.jacketType) {
    jacketsPrice = 0;
    return;
  }

  if (selected.jacketType === "none") {
    jacketsPrice = 0;
    return;
  } else {
    if (!selected.jacketColor || !selected.recordSize) {
      jacketsPrice = 0;
      return;
    }

    let lookupNumber =
      "JKT" +
      jacketMap[selected.jacketType] +
      jacketMap[selected.recordSize] +
      jacketMap[selected.jacketColor] +
      getDefaultMemphisBreakpoint(selected.quantity);

    jacketsPrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  }

  if (isNaN(jacketsPrice)) {
    console.error("error getting jacket price");
    jacketsPrice = 0;
  }
  // console.log("jacketPrice", jacketsPrice)
}

const insertMap = {
  "7x7": "7x7",
  "14x7": "14x7",
  "12x12": "12x12",
  "24x12": "24x12",
  "one sided": "1S",
  "two sided": "2S",
  "black & white": "BW",
  "full color": "FC",
};

function getInsertPrice() {
  if (!memphisPrices || !selected.printedInsertType) {
    insertsPrice = 0;
    return;
  }

  if (selected.printedInsertType === "none") {
    insertsPrice = 0;
  } else {
    // memphis pricing
    if (
      !selected.printedInsertSides ||
      !selected.printedInsertColor ||
      !selected.printedInsertSides
    ) {
      insertsPrice = 0;
      return;
    }

    if (selected.printedInsertType === "24x12") {
      let lookupNumber =
        "INS" +
        insertMap[selected.printedInsertType] +
        getDefaultMemphisBreakpoint(selected.quantity);

      insertsPrice =
        parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
    } else if (selected.printedInsertType === "12x12") {
      let lookupNumber =
        "INS" +
        insertMap[selected.printedInsertType] +
        insertMap[selected.printedInsertSides] +
        insertMap[selected.printedInsertColor] +
        getDefaultMemphisBreakpoint(selected.quantity);

      insertsPrice =
        parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
    } else {
      let lookupNumber =
        "INS" +
        insertMap[selected.printedInsertType] +
        insertMap[selected.printedInsertSides] +
        insertMap[selected.printedInsertColor] +
        getDefaultMemphisBreakpoint(Math.min(selected.quantity, 10000));

      insertsPrice =
        parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
    }
  }

  if (isNaN(insertsPrice)) {
    console.error("error getting insert price");
    insertsPrice = 0;
  }
  // console.log("insertsPrice", insertsPrice)
}

function getDownloadCardsPrice() {
  if (!memphisPrices || !selected.downloadCardType) {
    downloadCardsPrice = 0;
    return;
  }

  if (selected.downloadCardType === "none") {
    downloadCardsPrice = 0;
  } else {
    downloadCardsPrice =
      parseFloat(memphisPrices["DLC001"]) * parseFloat(selected.quantity);
  }

  if (isNaN(downloadCardsPrice)) {
    console.error("error getting download cards price");
    downloadCardsPrice = 0;
  }
  // console.log("downloadCardsPrice", downloadCardsPrice)
}

function getOuterwrapPrice() {
  if (!memphisPrices || !selected.outerWrapType) {
    outerwrapPrice = 0;
    return;
  }

  if (selected.outerWrapType === "none") {
    outerwrapPrice = 0;
    return;
  } else {
    if (!selected.recordSize) {
      outerwrapPrice = 0;
      return;
    }

    if (selected.outerWrapType === "shrinkwrap") {
      outerwrapPrice =
        parseFloat(memphisPrices["OWSWSTD"]) * parseFloat(selected.quantity);
    } else if (selected.outerWrapType === "polybag") {
      if (selected.recordSize === "12" || selected.recordSize === "10") {
        outerwrapPrice =
          parseFloat(memphisPrices["OWPB12R"]) * parseFloat(selected.quantity);
      } else if (selected.recordSize === "7") {
        outerwrapPrice =
          parseFloat(memphisPrices["OWPB07R"]) * parseFloat(selected.quantity);
      }
    }
  }

  if (isNaN(outerwrapPrice)) {
    console.error("error getting outerwrap price");
    outerwrapPrice = 0;
  }
  // console.log("outerwrapPrice", outerwrapPrice)
}

function getInsertionPrice() {
  insertionPrice = 0;
  insertionOfRecordPrice = 0;
  insertionOfInnerSleevePrice = 0;
  insertionOfPrintedInsertPrice = 0;
  insertionOfJacketPrice = 0;

  if (!memphisPrices) {
    return;
  }

  let lookupNumber = "IF001";

  if (selected.amount === "single") {
    insertionOfInnerSleevePrice =
      parseFloat(memphisPrices[lookupNumber]) * parseFloat(selected.quantity);
  } else if (selected.amount === "double") {
    insertionOfInnerSleevePrice =
      parseFloat(memphisPrices[lookupNumber]) *
      parseFloat(selected.quantity) *
      2;
  } else {
    insertionOfInnerSleevePrice =
      parseFloat(memphisPrices[lookupNumber]) *
      parseFloat(selected.quantity) *
      3;
  }

  if (selected.jacketType !== "none") {
    if (selected.amount === "single") {
      insertionOfJacketPrice =
        memphisPrices[lookupNumber] * parseFloat(selected.quantity);
    } else if (selected.amount === "double") {
      insertionOfJacketPrice =
        memphisPrices[lookupNumber] * parseFloat(selected.quantity) * 2;
    } else {
      insertionOfJacketPrice =
        memphisPrices[lookupNumber] * parseFloat(selected.quantity) * 3;
    }
  }

  if (selected.printedInsertType !== "none") {
    insertionOfPrintedInsertPrice =
      memphisPrices[lookupNumber] * parseFloat(selected.quantity);
  }

  if (selected.outerWrapType === "polybag") {
    insertionOfRecordPrice =
      memphisPrices[lookupNumber] * parseFloat(selected.quantity);
  }

  insertionPrice =
    insertionOfRecordPrice +
    insertionOfInnerSleevePrice +
    insertionOfPrintedInsertPrice +
    insertionOfJacketPrice;
  if (isNaN(insertionPrice)) {
    console.error("error getting insertion price");
    insertionPrice = 0;
    insertionOfRecordPrice = 0;
    insertionOfInnerSleevePrice = 0;
    insertionOfPrintedInsertPrice = 0;
    insertionOfJacketPrice = 0;
  }
  // console.log("insertionPrice", insertionPrice)
}

function getMiscPrice() {
  if (!memphisPrices) {
    miscPrice = 0;
    return;
  }
}

function getAllPrices() {
  getSurchargePrice();
  getSetupFeePrice();
  getCuttingPrice();
  getPlatingPrice();
  getStampersPrice();
  getTestPressingsPrice();
  getCenterLabelPrice();
  getRecordPrice();
  getInnerSleevePrice();
  getJacketPrice();
  getInsertPrice();
  getDownloadCardsPrice();
  getOuterwrapPrice();
  getInsertionPrice();
  getMiscPrice();
}

function getTotalPrice() {
  totalPrice =
    surchargePrice +
    setupPrice +
    cuttingPrice +
    platingPrice +
    stampersPrice +
    testPressingsPrice +
    testPressingsShippingPrice +
    centerLabelsPrice +
    recordPrice +
    innerSleevePrice +
    jacketsPrice +
    insertsPrice +
    downloadCardsPrice +
    outerwrapPrice +
    insertionPrice +
    miscPrice;

  sliderTotalPriceDisplay.innerText = "$" + formatPrice(totalPrice);
  sliderTotalPriceDisplayPerUnit.innerText =
    "$" + formatPrice(totalPrice / selected.quantity);
  sliderTotalPriceDisplayMobile.innerText = "$" + formatPrice(totalPrice);
  sliderTotalPriceDisplayPerUnitMobile.innerText =
    "$" + formatPrice(totalPrice / selected.quantity);

  // update hidden price inputs
  surchargePriceInput.value = formatPrice(surchargePrice);
  setupPriceInput.value = formatPrice(setupPrice);
  cuttingPriceInput.value = formatPrice(cuttingPrice);
  platingPriceInput.value = formatPrice(platingPrice);
  stampersPriceInput.value = formatPrice(stampersPrice);
  testPressingsPriceInput.value = formatPrice(testPressingsPrice);
  centerLabelPriceInput.value = formatPrice(centerLabelsPrice);
  recordPriceInput.value = formatPrice(recordPrice);
  innerSleevePriceIput.value = formatPrice(innerSleevePrice);
  jacketPriceInput.value = formatPrice(jacketsPrice);
  insertPriceInput.value = formatPrice(insertsPrice);
  downloadCardPriceInput.value = formatPrice(downloadCardsPrice);
  outerwrapPriceInput.value = formatPrice(outerwrapPrice);
  insertionPriceInput.value = formatPrice(insertionPrice);
  miscPriceInput.value = formatPrice(miscPrice);
  totalPriceInput.value = formatPrice(totalPrice);
  testPressingsShippingFeeInput.value = formatPrice(testPressingsShippingPrice);
  insertionOfRecordPriceInput.value = formatPrice(insertionOfRecordPrice);
  insertionOfInnerSleevePriceInput.value = formatPrice(
    insertionOfInnerSleevePrice
  );
  insertionOfPrintedInsertPriceInput.value = formatPrice(
    insertionOfPrintedInsertPrice
  );
  insertionOfJacketPriceInput.value = formatPrice(insertionOfJacketPrice);
  testPressingsTotalPriceInput.value = formatPrice(
    testPressingsPrice + testPressingsShippingPrice
  );

  platingDisplayInput.value =
    selected.recordCutting === "dmm" ? "DMM Plating" : "2-Step Plating";
}

fetchPrices();

function toTitleCase(str) {
  if (typeof str !== "string" || !str.length) {
    return str;
  }

  let arr = str.split("");
  if (arr[0] !== " ") {
    arr[0] = arr[0].toUpperCase();
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === " " || arr[i - 1] === "-") {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join("");
}

window.Webflow ||= [];
window.Webflow.push(() => {
  const form = document.getElementById("wf-form-Record-Builder-Form");

  form.addEventListener("submit", () => {
    form.querySelectorAll("input").forEach((input) => {
      input.value = toTitleCase(input.value);
    });
  });
});
