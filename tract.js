let x = (fr, f, m, t) => Object.entries(fr).reduce((t, kv) => ((!f || f(...kv)) && (t[kv[0]] = m && m(...kv) || kv[1]), t), t || {});

