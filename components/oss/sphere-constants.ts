/** Match `OssSphereScene` frame size (no R3F import — safe for dynamic loading). */
export const SCENE_H =
  "h-[min(90vh,860px)] w-full min-w-0 max-w-5xl" as const;

export const LOADING_CLASS = `from-hex-bg flex ${SCENE_H} items-center justify-center bg-gradient-to-b to-[#e8e8e8] text-sm text-hex-muted`;
