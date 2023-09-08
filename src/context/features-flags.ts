import { faker } from '@faker-js/faker';

export const features = {
  heroImageEnabled: false,
};

function createRandomFeatureFlag() {
  return {
    [faker.hacker.adjective()]: false,
  };
}

const FF = faker.helpers.multiple(createRandomFeatureFlag, {
  count: 25,
});

for (const feature of FF) {
  Object.assign(features, feature);
}
