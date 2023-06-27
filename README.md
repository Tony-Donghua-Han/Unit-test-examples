# Unit-test-examples

This is the Training Course for SL-OLO repor on unit test
Overall training guideline for test repo are:

Modular Design

1. To be practiced in the follow up Homework PR

Test Isolation (yarn run test-isolation)

1. Change the first function so that the second function fails
2. Fix the test so that second test doesn't fail anymore
3. Use deepFreeze to find the issue in the first function

Test Coverage

1. Enable test coverage for the repo
   1. Make sure that coverage.ts is not fully covered.
   2. increment.ts is not covered at all
   3. Common code is not covered but not required (excluded)
2. Fix the coverage issue with the case

Jest Mock

1. Use Jest.spyOn to mock existingInputPlusOneFunction so that the test pass consistently
   1. Example doc: https://jestjs.io/docs/jest-object#jestspyonobject-methodname
2. Use Jest.mock to mock existingInputPlusOneFunction so that the second test returns undefined
   1. Example doc: https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options
3. Use Jest.mock to mock the entire existingcode.ts file
