# Tablespace Queries

## All Tablespace assigned to a user
```
select distinct tablespace_name
from   dba_segments
where  owner = upper('MY_USER');
```

## Tablespace size in MB
```
select tablespace_name, sum(bytes)/1024/1024 as size_in_mb
from   dba_segments
group  by tablespace_name
order  by tablespace_name;
```

## Size of Table in MB
```
select segment_name, sum(bytes)/1024/1024 as size_in_mb
from   user_segments
where  segment_name = 'MY_USER';
```