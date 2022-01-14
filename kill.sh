standard_ports=(9099 5001 8080 5000 9199 4000 3000)
for p in ${standard_ports[@]}; do
  echo "Killing process on port ${p}"
  lsof -i tcp:${p} -t | xargs kill -9
done