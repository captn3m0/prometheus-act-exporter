# METRICS

Metrics are reported in the format:

-   `act_fup_${category}_usage_bytes`
-   `act_fup_${category}_total_bytes`

Where $category is one of `live` (normal usage), `flexibytes` (FlexiByte only usage), or `aggregate` (combined usage).

```
# HELP act_fup_live_usage_bytes ACT live usage in bytes (precision GB)
# TYPE act_fup_live_usage_bytes gauge
act_fup_live_usage_bytes 0

# HELP act_fup_live_total_bytes ACT live usage in bytes (precision GB)
# TYPE act_fup_live_total_bytes gauge
act_fup_live_total_bytes 800000000

# HELP act_fup_flexibytes_usage_bytes ACT flexibytes usage in bytes (precision GB)
# TYPE act_fup_flexibytes_usage_bytes gauge
act_fup_flexibytes_usage_bytes 102580000

# HELP act_fup_flexibytes_total_bytes ACT flexibytes usage in bytes (precision GB)
# TYPE act_fup_flexibytes_total_bytes gauge
act_fup_flexibytes_total_bytes 100000000

# HELP act_fup_aggregate_usage_bytes ACT aggregate usage in bytes (precision GB)
# TYPE act_fup_aggregate_usage_bytes gauge
act_fup_aggregate_usage_bytes 102580000

# HELP act_fup_aggregate_total_bytes ACT aggregate usage in bytes (precision GB)
# TYPE act_fup_aggregate_total_bytes gauge
act_fup_aggregate_total_bytes 900000000
```

It also exposes some nodeJS metrics:

```
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 0.001487 1530394613092

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 0 1530394613092

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.001487 1530394613092

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1530394613

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 38600704 1530394613106

# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1075826688 1530394613106

# HELP process_heap_bytes Process heap size in bytes.
# TYPE process_heap_bytes gauge
process_heap_bytes 87396352 1530394613106

# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 13 1530394613105

# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 358178

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds 0.011130566 1530394613105

# HELP nodejs_active_handles_total Number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total 2 1530394613094

# HELP nodejs_active_requests_total Number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total 4 1530394613094

# HELP nodejs_heap_size_total_bytes Process heap size from node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes 19693568 1530394613094

# HELP nodejs_heap_size_used_bytes Process heap size used from node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes 9105080 1530394613094

# HELP nodejs_external_memory_bytes Nodejs external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes 99117 1530394613094

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="read_only"} 0 1530394613094
nodejs_heap_space_size_total_bytes{space="new"} 8388608 1530394613094
nodejs_heap_space_size_total_bytes{space="old"} 7610368 1530394613094
nodejs_heap_space_size_total_bytes{space="code"} 1048576 1530394613094
nodejs_heap_space_size_total_bytes{space="map"} 1073152 1530394613094
nodejs_heap_space_size_total_bytes{space="large_object"} 1572864 1530394613094

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="read_only"} 0 1530394613094
nodejs_heap_space_size_used_bytes{space="new"} 1378008 1530394613094
nodejs_heap_space_size_used_bytes{space="old"} 6093664 1530394613094
nodejs_heap_space_size_used_bytes{space="code"} 837056 1530394613094
nodejs_heap_space_size_used_bytes{space="map"} 555104 1530394613094
nodejs_heap_space_size_used_bytes{space="large_object"} 249024 1530394613094

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="read_only"} 0 1530394613094
nodejs_heap_space_size_available_bytes{space="new"} 2746664 1530394613094
nodejs_heap_space_size_available_bytes{space="old"} 1080240 1530394613094
nodejs_heap_space_size_available_bytes{space="code"} 0 1530394613094
nodejs_heap_space_size_available_bytes{space="map"} 80 1530394613094
nodejs_heap_space_size_available_bytes{space="large_object"} 1507024384 1530394613094
```
