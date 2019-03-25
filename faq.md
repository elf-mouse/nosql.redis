**Q:**

```
MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled. Please check Redis logs for details about the error.
```

**A:**

出错原因：强制关闭 Redis 快照导致不能持久化

解决方案：将 `stop-writes-on-bgsave-error` 设置为 `no`

```
127.0.0.1:6379> config set stop-writes-on-bgsave-error no
```
