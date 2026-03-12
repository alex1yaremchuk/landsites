param(
    [string]$File = "genplan_vega_polygons.geojson"
)

$tmp = "$File.tmp"

Get-Content $File -Raw |
  jq '
    .features |= sort_by(.properties.id) |
    .features |= map(del(.id))
  ' |
  jq -S . > $tmp

Move-Item $tmp $File -Force