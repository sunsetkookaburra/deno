#!/bin/sh
>&2 echo "========"
>&2 echo $@
>&2 echo $PWD
>&2 echo "$(ls -la)"
exit 42
#echo $@ >> tee -a /home/runner/work/deno/deno/.cargo/arm64_tests.txt
#echo $PWD >> tee -a /home/runner/work/deno/deno/.cargo/arm64_tests.txt
