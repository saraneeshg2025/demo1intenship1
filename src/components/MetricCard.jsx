function MetricCard({ label, value, icon, tone }) {
  return (
    <article className="metric-card"><span className={`metric-icon ${tone}`} aria-hidden="true">{icon}</span><div><p>{label}</p><strong>{value}</strong></div><span className="metric-spark" aria-hidden="true">↗</span></article>
  )
}

export default MetricCard
