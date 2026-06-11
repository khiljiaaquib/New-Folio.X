export const edu_code  = (edu_counter)=>{
    return (` <h4>Education</h4>
    <hr>
 <div>
    <label class="form-label" for="Degree${edu_counter}">Degree:</label>
    <input class="form-control res-inp Degree Degree${edu_counter} education" id="Degree${edu_counter}" name="degree" type="text">
    </div>
    <div>
        <label for="institution${edu_counter}">Institution:</label>
    <input id="institution${edu_counter}" class="form-control res-inp institution institution${edu_counter} education" name="institution" type="text" required>
    </div>
    <div>
          <label for="eduSD${edu_counter}">Start Date:</label>
    <input id="eduSD${edu_counter}" class="form-control res-inp eduSD eduSD${edu_counter} education" name="eduSD" type="date">
    </div>
    <div>
      <label for="eduED${edu_counter}">End Date:</label>
    <input id="eduED${edu_counter}" class="form-control res-inp eduSD eduED${edu_counter} education"  name="eduED" type="date">
</div>`);}
export const work_code = (work_counter)=>{ 
    return(`
     <h4>Work Experience</h4>
    <hr>
    <div>
    <label class="form-label" for="workJob${work_counter}">Job Title:</label>
    <input class="form-control res-inp workJob workJob${work_counter} work_Experience" id="workJob${work_counter}" name="workJob" type="text">
    </div>
    <div>
        <label for="company${work_counter}">Company:</label>
    <input id="company${work_counter}" class="form-control res-inp company company${work_counter} work_Experience" name="company" type="text">
    </div>
    <div>
          <label for="workSD${work_counter}">Start Date:</label>
    <input id="workSD${work_counter}" class="form-control res-inp workSD workSD${work_counter} work_Experience" name="workSD" type="date">
    </div>
    <div>
      <label for="workED${work_counter}">End Date:</label>
    <input id="workED${work_counter}" class="form-control res-inp workED workED${work_counter} work_Experience" name="workED" type="date">
</div>
 <div>
      <label for="workdesc${work_counter}">Description:</label>
    <input id="workdesc${work_counter}" class="form-control res-inp workdesc workdesc${work_counter} work_Experience" name="workDesc" type="text">

</div>`);}

export const project_code = (project_counter)=>{
    return(`
     <h4>Projects</h4>
    <hr>
    <div>
    <label class="form-label" for="project_name${project_counter}">Project Name:</label>
    <input class="form-control res-inp project_name project_name${project_counter} project_exp" id="project_name${project_counter}" name="projects" type="text">
    </div>
    <div>
        <label for="tech${project_counter}">Technology Used:</label>
    <input id="tech${project_counter}" class="form-control res-inp tech tech${project_counter} project_exp" name="technology" type="text">
    </div>
    <div>
          <label for="projecturl${project_counter}">Project(URL)</label>
    <input id="projecturl${project_counter}" class="form-control res-inp projecturl projecturl${project_counter} project_exp" name="projectURL" type="url">
    </div>
 <div>
      <label for="projectdesc${project_counter}">Description:</label>
    <input id="projectdesc${project_counter}" class="form-control res-inp projectdesc projectdesc${project_counter} project_exp" name="projectDesc" type="text">
</div>`);
};
