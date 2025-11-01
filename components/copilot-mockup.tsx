export function CopilotMockup() {
  return (
    <section className="container mx-auto px-6 pb-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 rounded-lg bg-accent/10 blur-3xl" />
        <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl backdrop-blur-sm">
          {/* Mockup header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-black/60 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-sm font-medium tracking-wide text-foreground/80">REN AI ASSISTANT</span>
            </div>
            <div className="text-sm text-muted-foreground">•••</div>
          </div>

          {/* Mockup content */}
          <div className="grid lg:grid-cols-2">
            {/* Chat panel */}
            <div
              className="relative flex flex-col border-r border-border/50 bg-black/30 backdrop-blur-sm"
              style={{ height: "600px" }}
            >
              {/* Chat messages - scrollable area */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {/* User message */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/30">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Write a set of unit test functions for the selected code
                      </p>
                    </div>
                  </div>

                  {/* AI Trace - Tool Usage */}
                  <div className="ml-11 space-y-2 border-l-2 border-accent/30 pl-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                      <span className="font-mono">Tool: ReadFile</span>
                      <span className="text-accent/60">→</span>
                      <span>module.py</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                      <span className="font-mono">Analyzing code structure...</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                      <span className="font-mono">Tool: SearchRepo</span>
                      <span className="text-accent/60">→</span>
                      <span>Finding test patterns</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                      <span className="font-mono">Generating unit tests...</span>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/30 ring-1 ring-accent/40">
                      <svg
                        className="h-4 w-4 text-accent-foreground"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="overflow-hidden rounded-lg border border-border/50 bg-black/90 backdrop-blur-sm">
                        <div className="border-b border-border/50 bg-black/60 px-3 py-2">
                          <span className="font-mono text-xs text-muted-foreground">test_module.py</span>
                        </div>
                        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
                          <code>
                            <div className="text-foreground/60">import unittest</div>
                            <div className="text-foreground/60">import datetime</div>
                            <div className="text-foreground/60"></div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              class TestParseExpenses(unittest.TestCase):
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"    "}def test_parse_expenses_with_valid_input(self):
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}expenses_string = "2023-01-01 -34.01 USD\n..."
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}expected_output = [(datetime.datetime(2023, 1, 1), ...)]
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}self.assertEqual(parse_expenses(expenses_string), expected_output)
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"    "}def test_parse_expenses_with_empty_input(self):
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}expenses_string = ""
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}expected_output = []
                            </div>
                            <div className="bg-green-500/10 text-green-400">
                              <span className="inline-block w-6 select-none text-green-500/60">+</span>
                              {"        "}self.assertEqual(parse_expenses(expenses_string), expected_output)
                            </div>
                            <div className="bg-red-500/10 text-red-400">
                              <span className="inline-block w-6 select-none text-red-500/60">-</span>
                            </div>
                            <div className="bg-red-500/10 text-red-400">
                              <span className="inline-block w-6 select-none text-red-500/60">-</span>
                              {"    "}# Old test implementation
                            </div>
                            <div className="bg-red-500/10 text-red-400">
                              <span className="inline-block w-6 select-none text-red-500/60">-</span>
                              {"    "}def test_basic(self):
                            </div>
                            <div className="bg-red-500/10 text-red-400">
                              <span className="inline-block w-6 select-none text-red-500/60">-</span>
                              {"        "}pass
                            </div>
                          </code>
                        </pre>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        The code assumes that the datetime module is imported. The test cases cover different scenarios
                        such as valid input, empty input, input with invalid date format, and invalid value format.
                      </p>
                    </div>
                  </div>

                  {/* ... rest of code here ... */}
                </div>
              </div>

              <div className="border-t border-border/50 bg-black/60 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-4 py-3 backdrop-blur-sm transition-all hover:border-accent/50">
                  <input
                    type="text"
                    placeholder="Ask a question or type / for topics"
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button className="text-accent transition-transform hover:scale-110">→</button>
                </div>
              </div>
            </div>

            {/* Code editor panel */}
            <div className="bg-black/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-md bg-accent/20 px-2 py-1 font-medium">Preview</span>
                <span className="font-mono">module.py</span>
              </div>
              <pre className="text-xs leading-relaxed text-foreground/90 font-mono">
                <code>{`def parse_expenses(expenses_string):
    """Parse the date using datetime.
    Parse the value using float.
    Example: expenses_string:
        2023-01-01 -34.01 USD
        2023-01-03 -2.59 EUR
        2023-01-03 -5.72 EUR
    
    Returns:
        expenses = []
    
    for line in expenses_string.split("\\n"):
        if line.startswith("#"):
            continue
        date, value, currency = line.split(" ")
        expenses.append((datetime.datetime.strptime(date, "%Y-%m-%d"),
                        float(value),
                        currency))
    
    return expenses

expenses_data = """2023-01-01 -34.01 USD
    2023-01-03 -2.59 EUR
    2023-01-03 -5.72 EUR"""
`}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex gap-4 font-mono">
                  <span>Ln 17, Col 3</span>
                  <span>Spaces: 2</span>
                  <span>UTF-8</span>
                  <span>LF</span>
                </div>
                <span className="font-medium">(Python)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
