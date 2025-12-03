// import arrayDataBase from "../database/arrayDb";
// import analiza from "analiza-sync";
import readline from "readline-sync";
import {
  CreatingNewIntelligenceReport,
  SavingReportintotheDB,
  GettingAllReports,
  SearchingforReportbyID,
  DeletingReportbyID,
  EditingExistingReport,
} from "../services/functions.js";
let running = true;
while (running) {
  const action = readline.question(
    "1. Add a new intelligence report\n2. Show all reports\n3. Search report by ID\n4. Delete report by ID\n5. Edit report by ID\n0. Exit\n"
  );
  switch (action) {
    case "1":
      const report1 = readline.question("give me id terorist");
      const report2 = readline.question("give me terroristName");
      const report3 = readline.question("give me weapons in the attack");
      const report4 = readline.question("give me text abuot what hapen");
      const report = CreatingNewIntelligenceReport(
        report1,
        report2,
        report3,
        report4
      );
      SavingReportintotheDB(report);
      break;
    case "2":
      console.log(GettingAllReports());
      break;
    case "3":
      const id = readline.question("choose id terorist");
      console.log(SearchingforReportbyID(id));
      break;
    case "4":
      const id1 = readline.question("choose id terorist");
      DeletingReportbyID(id1);
      break;
    case "5":
      //   const targetId = readline.question("choose report to edit");
      const report11 = readline.question("give me id terorist");
      const report21 = readline.question("give me terroristName");
      const report31 = readline.question("give me weapons in the attack");
      const report41 = readline.question("give me text abuot what hapen");
      const updates = CreatingNewIntelligenceReport(
        report11,
        report21,
        report31,
        report41
      );
      EditingExistingReport(report11, updates);
      break;
    case "0":
      running = false;
      break;
    default:
      break;
  }
}
