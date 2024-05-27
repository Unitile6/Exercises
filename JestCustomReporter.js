import { readFileSync, writeFileSync } from "fs";
import path from "path";

/**
 * Create a test reporter which alters the `exercise-results` JSON
 * file when a test fails or passes. This way we can in the UI show
 * which test passed and which failed.
 */
export default class JestCustomReporter {
  // This is reset on every run.
  results = {};

  constructor(globalConfig, reporterOptions, reporterContext) {
    this._globalConfig = globalConfig;
    this._options = reporterOptions;
    this._context = reporterContext;
  }

  onTestResult(test, testResult) {
    // Split the full path on / so we can extract the test name.
    const split = testResult.testFilePath.split(path.sep);
    // Should be the third from the right.
    const testName = split.at(-3);
    // Now extract 001-greeter into 001.
    const id = testName.split('-')[0];

    const passed = testResult.numFailingTests === 0 && testResult.numPassingTests > 0;

    this.results[id] = passed;
  }

  onRunComplete() {
    const raw = readFileSync('./result/exercise-results.json');
    const json = JSON.parse(raw);

    Object.entries(this.results).forEach(([id, passed]) => {
      json[id] = passed;
    });

    writeFileSync('./result/exercise-results.json', JSON.stringify(json));
  }
}
