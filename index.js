const jsonfile = require("jsonfile");
const moment = require("moment");
//const { default: random } = require("random");
const { Random } = require("random-js");
const random = new Random();
const simpleGit = require("simple-git");
//const random = require('random');
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.integer(0, 54);
  const y = random.integer(0, 6);
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: DATE,
  };
  console.log(`Adding commit for ${DATE}`);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};
makeCommit(1c);
