# Git Bot

Git Bot is a Node.js application that automates the process of creating commits with random dates in a Git repository. This tool can be useful for testing and simulating commit histories with diverse timestamp scenarios.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Installation

To use Git Bot, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nirmalyax/Git-Bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Git-Bot
   ```

3. Install dependencies:

   ```bash
   npm is already provided 
   ```

## Usage

To run Git Bot, use the following command:

```bash
node index.js
```

This command will generate random commits with different dates and push them to the remote repository.

**Note:** Ensure that you are in the correct Git repository before running the command.

## Configuration

You can customize the behavior of Git Bot by modifying the `config.js` file. The configuration file includes options such as the number of commits to generate, the starting date, and the commit message format.

```javascript
// config.js

 const x = random.integer(0, 54);
  const y = random.integer(0, 6);
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
```

Adjust these options according to your requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
