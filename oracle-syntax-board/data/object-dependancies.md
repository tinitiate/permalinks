# Object Dependancies

## DBA Dependances
```
select *
from   dba_dependencies
where  referenced_name='MYTESTOBJ';
```

## Recursive DBA Dependances
```
select  name, type, referenced_name, referenced_type
from    dba_dependencies
where   owner='MY_OWNER'
and     name='MY_OBJECT'
connect by nocycle
prior   referenced_name = name;
```

## Check Object Reference in DBA Source
```
select *
from   dba_source
where  upper(text) like '%_MY_TEXT_%'
and    owner = 'MY_OWNER'
and    name  = 'MY_OBJECT_NAME'
and    type  = 'MY_OBJECT_TYPE';
```
 