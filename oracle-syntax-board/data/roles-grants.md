# Roles and Grants

## Details of my Roles and Grants
```
select  dtp.grantee
       ,dtp.table_name
       ,dtp.privilege
       ,drp.grantee
from    dba_tab_privs  dtp
       ,dba_role_privs drp
where  dtp.grantee  = drp.granted_role
and    dtp.grantee  = 'MY_GROUP_ROLE'
and    drp.grantee  = 'MY_ROLE'
order  by drp.grantee;
```


## All Roles and Grants for an user
```
select  'ROLE' grant_type, grantee grantee, granted_role privilege, admin_option grantable, null object_name, null column_name, null owner
from    dba_role_privs
where   grantee='MY_USER'
union all
select  'SYSTEM' grant_type, grantee grantee, privilege, admin_option, null object_name, null column_name, null owner
from    dba_sys_privs
where   grantee='MY_USER'
union all
select  'TABLE' grant_type, grantee grantee, privilege,  grantable, table_name object_name, null column_name, owner
from    dba_tab_privs
where   grantee='MY_USER'
union all
select  'COLUMN' grant_type, grantee grantee, privilege, grantable, table_name object_name, column_name, owner
from    dba_col_privs
where   grantee='MY_USER'
order by 1;
```