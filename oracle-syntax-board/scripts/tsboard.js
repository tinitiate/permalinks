// Oracle Jobs
$(document).ready(function () {
    $('#NavPills').append("<li class=\"nav-item\"> <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#OracleJobs\">Oracle Jobs</a> </li>" );
});
$(document).ready(function () {
    $.get("scripts/data/cards/oracle-jobs.md", function (data, textStatus, jqXHR) {
        $('#TabContent').append(  "<div class=\"tab-pane active container\" + id=\"OracleJobs\">" 
                                + marked(data) 
                                + "</div>");
    });
});


// Object Dependancies
$(document).ready(function () {
    $('#NavPills').append("<li class=\"nav-item\"> <a class=\"nav-link \" data-toggle=\"pill\" href=\"#ObjectDependancies\">Object Dependancies</a> </li>" );
});
$(document).ready(function () {    
    $.get("scripts/data/cards/object-dependancies.md", function (data, textStatus, jqXHR) {
        $('#TabContent').append(  "<div class=\"tab-pane container\" + id=\"ObjectDependancies\">"
                                + marked(data)
                                + "</div>");
    });
});


// Tablespace Queries
$(document).ready(function () {
    $('#NavPills').append("<li class=\"nav-item\"> <a class=\"nav-link \" data-toggle=\"pill\" href=\"#TableSize\">Table Size Queries</a> </li>" );
});
$(document).ready(function () {    
    $.get("scripts/data/cards/table-space-size.md", function (data, textStatus, jqXHR) {
        $('#TabContent').append(  "<div class=\"tab-pane container\" + id=\"TableSize\">" 
                                + marked(data) 
                                + "</div>");
    });
});


// User Object Roles and Grants
$(document).ready(function () {
    $('#NavPills').append("<li class=\"nav-item\"> <a class=\"nav-link \" data-toggle=\"pill\" href=\"#RolesGrants\">User Roles and Grants</a> </li>" );
});
$(document).ready(function () {
    $.get("scripts/data/cards/roles-grants.md", function (data, textStatus, jqXHR) {
        $('#TabContent').append(  "<div class=\"tab-pane container\" + id=\"RolesGrants\">" 
                                + marked(data) 
                                + "</div>");
    });
});
