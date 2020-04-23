// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { unitTest, assert } from "./test_util.ts";

unitTest(function buildInfo(): void {
  // Deno.build is injected by rollup at compile time. Here
  // we check it has been properly transformed.
  const { arch, os } = Deno.build;
  assert(arch === "x64" || arch === "aarch64");
  assert(os === "mac" || os === "win" || os === "linux");
});
