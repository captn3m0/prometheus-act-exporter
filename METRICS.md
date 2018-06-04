# METRICS

Below are an example of the metrics as exposed by this exporter.

```
# HELP act_fup_usage_gigabytes_total ACT current usage in GB
# TYPE act_fup_usage_gigabytes_total gauge
act_fup_usage_gigabytes_total 41.42

# HELP act_fup_max_gigabytes_total ACT FUP limit in GB
# TYPE act_fup_max_gigabytes_total gauge
act_fup_max_gigabytes_total 500
```

It also exposes some nodeJS metrics:

```
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 0.001233 1528092827015

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 0.000114 1528092827015

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.001347 1528092827015

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1528092827

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 39550976 1528092827028

# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1074991104 1528092827028

# HELP process_heap_bytes Process heap size in bytes.
# TYPE process_heap_bytes gauge
process_heap_bytes 88317952 1528092827028

# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 13 1528092827026

# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 358146

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds 0.011319479 1528092827027

# HELP nodejs_active_handles_total Number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total 2 1528092827016

# HELP nodejs_active_requests_total Number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total 4 1528092827016

# HELP nodejs_heap_size_total_bytes Process heap size from node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes 19193856 1528092827016

# HELP nodejs_heap_size_used_bytes Process heap size used from node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes 8858072 1528092827016

# HELP nodejs_external_memory_bytes Nodejs external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes 42604 1528092827016

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="new"} 8388608 1528092827016
nodejs_heap_space_size_total_bytes{space="old"} 7639040 1528092827016
nodejs_heap_space_size_total_bytes{space="code"} 1048576 1528092827016
nodejs_heap_space_size_total_bytes{space="map"} 544768 1528092827016
nodejs_heap_space_size_total_bytes{space="large_object"} 1572864 1528092827016

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="new"} 1038624 1528092827016
nodejs_heap_space_size_used_bytes{space="old"} 6219304 1528092827016
nodejs_heap_space_size_used_bytes{space="code"} 883776 1528092827016
nodejs_heap_space_size_used_bytes{space="map"} 474400 1528092827016
nodejs_heap_space_size_used_bytes{space="large_object"} 249120 1528092827016

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="new"} 3086048 1528092827016
nodejs_heap_space_size_available_bytes{space="old"} 845168 1528092827016
nodejs_heap_space_size_available_bytes{space="code"} 0 1528092827016
nodejs_heap_space_size_available_bytes{space="map"} 0 1528092827016
nodejs_heap_space_size_available_bytes{space="large_object"} 1481833984 1528092827016

# HELP nodejs_version_info Node.js version info.
# TYPE nodejs_version_info gauge
nodejs_version_info{version="v10.3.0",major="10",minor="3",patch="0"} 1
```
