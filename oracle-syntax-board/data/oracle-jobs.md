# Managing Jobs with DBMS Scheduler

## Create a new Job
```
begin
    DBMS_SCHEDULER.CREATE_JOB (
        job_name        => 'MY_JOB_NAME',
        job_type        => 'PLSQL_BLOCK',
        job_action      => 'begin my_proc; end;',
        start_date      => timestamp '2018-05-10 10:00:00',
        repeat_interval => 'FREQ=MONTHLY;BYMONTHDAY=1;',
        enabled         => TRUE);
end;
```

## Disable a Job, By Job Name
```
begin
    dbms_scheduler.disable('MY_JOB_NAME');
end;
```

## Check DBMS_SCHEDULER Job Details
```
SELECT * 
FROM   dba_scheduler_jobs
where  job_name = 'MY_JOB_NAME';
```

## Monitor Job status
```
select *
from   dba_scheduler_running_jobs
where  job_name = 'MY_JOB_NAME';
```

## Monitor Job Run status
```
select * 
from   dba_scheduler_job_run_details
where  job_name = 'MY_JOB_NAME'
order  by 2 desc;
```