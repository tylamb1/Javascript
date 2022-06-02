function mergeJsonObjects(arr1, arr2) {
  let start1 = 0;
  let start2 = 0;
  let merge = [];

  while (start1 < arr1.length) {
    while (start2 < arr1.length) {
      if (arr1[start1].id === arr2[start2].id) {
        //pushing the merged objects into array
        merge.push({ ...arr1[start1], ...arr2[start2] });
      }
      //incrementing start value
      start2 += 1;
    }

    //incrementing start value
    start1 += 1;
    start2 = 0;
  }
  return merge;
}

let emp_info = `
  [  
    {"id":"1","name_first":"James","name_last":"Smith"},
    {"id":"2","name_first":"Steve","name_last":"Rock"},
    {"id":"3","name_first":"Leonard","name_last":"Spock"}
  ]
`;
let json_emp_info = JSON.parse(emp_info);

let emp_salary = `
  [  
    {"id":"1","salary":"56000"},
    {"id":"2","salary":"59000"},
    {"id":"3","salary":"34000"}
  ]
`;
let json_emp_salary = JSON.parse(emp_salary);
let emp_married = `
  [  
    {"id":"1","married":"Married"},
    {"id":"2","married":"Single"},
    {"id":"3","married":"Complicated"}
  ]
`;
let json_emp_married = JSON.parse(emp_married);

let temp_json = mergeJsonObjects(json_emp_info, json_emp_salary);
let final_json = mergeJsonObjects(temp_json, json_emp_married);

console.log(final_json);
