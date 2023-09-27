#!/usr/bin/env node
import {CLIApplication, HelpCommand, ImportCommand, VersionCommand, GenerateCommand} from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new ImportCommand(),
    new VersionCommand(),
    new GenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
