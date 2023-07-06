# Unit-test-examples

## Introduction

This is the Training Course for SL-OLO report on unit test, this training session contain 3 different sessions:

1. (Session one) Go over the material and exercise covered in this repository, using the provided confluence page a guideline.
2. (Home work) Each participant would work on a PR specific to unit test for at least 4 hours, aiming for 100% coverage.
3. (Session three) Have each participant go over what they have done in their PR, sharing what they have learned and what are some blocks they faced.

---

## Session one

Use the provided material in the confluence page. http://intranet:8080/pages/viewpage.action?pageId=483921974

For each exercise, first go over the importance of the topic on the confluence page, then have each participant do the exercise. Once they are done, allow everyone to share their result, ask for different approaches, and ask everyone to share what they think of different approach. Make sure everyone understand there are no right or wrong answer here, as this is a learning exercise.

> Make sure each exercise is performed with the specified command for better result

&nbsp;

### Test Isolation

Look into the confluence page, go over the important of having isolated tests, then have everyone work on the practice.

Command: `yarn run test-isolation`

1. Change the first function so that the test of the second function fails
2. Fix the test so that second test doesn't fail anymore
3. Use deepFreeze to find the issue in the first function

### Jest Mock

Command: `yarn run test-mock`

1. Use Jest.spyOn to mock getResultWithId so that all three test pass
   1. Example doc: https://echobind.com/post/how-to-mock-using-jest-spyon-part-2-3
   2. Add check to make sure the mocked function is called at least once.

### Test Coverage

Command: `yarn run test`

1. Enable test coverage for the repo
   1. Make sure that coverage.ts is not fully covered.
   2. increment.ts is not covered at all
   3. Common code is not covered but not required (excluded)
2. Fix the coverage issue with the case

### Modular Design

1. To be practiced in the follow up Homework PR

---

## Homework

Each participant should pick a part of the code and add unit test with 100% coverage to it, spending at least 4 hours on the work.

Trainer: Organize a follow up meeting for everyone to discuss about their changes.

---

## Session Two

Have all participant go over the PR one by one, have them answer the following questions

PR follow up questions:

1. What was I trying to achieve?
2. What have I achieved?
3. What are the blocks?
4. Are there any improvement that could have been made to make the code more Modular given more time?
