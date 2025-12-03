import arrayDataBase from "../database/arrayDb.js";
import {nanoid} from 'nanoid'

export function CreatingNewIntelligenceReport(
  id=nanoid(3),
  terroristName = "Muhammad — unknown last name",
  weapons,
  text
) {
  if (typeof id != "string" && typeof id != "number") {
    throw new Error("id must be number or string");
  }
  
  const cnir = {
    id: id,
    terroristName: terroristName,
    weapons: weapons,
    text: text,
  };
  return cnir;
}

export function SavingReportintotheDB(reportObject) {
    let idx
  if (arrayDataBase.length != 0) {
    idx = arrayDataBase.findIndex(
      (report) => report.id === reportObject.id
    );
  }
  
  if (idx >= 0) {
    throw new Error("report is exist");
  } else
    try {
      if (
        reportObject.id &&
        reportObject.terroristName &&
        reportObject.weapons &&
        reportObject.text
      ) {
        arrayDataBase.push(reportObject);
      }
    } catch {
      throw new Error("The object not contains all required report keys");
    }
}

const cnir1 = {
  id: 123,
  terroristName: "musilini",
  weapons: "nife",
  text: "very dengeres",
};

// SavingReportintotheDB(cnir1);

export function GettingAllReports() {
  return arrayDataBase.sort((a, b) => a.id - b.id);
}

export function GettingAllReportsSortedbyField(field) {
  const orderDb = arrayDataBase.sort(function (a, b) {
    if (a[field] < b[field]) {
      return -1; // a comes before b
    }
    if (a[field] > b[field]) {
      return 1; // a comes after b
    }
    return 0; // names are equal
  });
  return orderDb;
}

export function SearchingforReportbyID(id) {
  const idx = arrayDataBase.findIndex((report) => report.id === id);
  if (idx < 0) {
    throw new Error("report not exist");
  }
  return arrayDataBase[idx];
}

export function DeletingReportbyID(id) {
  const idx = arrayDataBase.findIndex((report) => report.id === id);
  if (idx < 0) {
    throw new Error("report not exist");
  }
  arrayDataBase.splice(idx, 1);
}
// DeletingReportbyID(123)
export function EditingExistingReport(targetId, updates) {
  let idx
    idx = arrayDataBase.findIndex((report) => {
    console.log(report.id,targetId)
    return report.id === targetId
}
);
  if (idx<0) {
    throw new Error("report not exist");
  }
  const reportToUpdate = arrayDataBase[idx];
  Object.assign(reportToUpdate, updates);
  if (
    Object.keys(reportToUpdate).length >
    Object.keys(arrayDataBase[idx]).length
  ) {
    throw new Error(
      "there is updates contains keys that do not exist in a real report"
    );
  }
  arrayDataBase[idx] = reportToUpdate;
}
// console.log(arrayDataBase);










