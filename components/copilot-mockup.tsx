export function CopilotMockup() {
  return (
    <section className="container mx-auto px-6 pb-20 -mt-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 rounded-lg bg-accent/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl backdrop-blur-sm">
          {/* Mockup header */}
          <div className="relative z-10 flex items-center justify-between border-b border-border/50 bg-black/60 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-sm font-medium tracking-wide text-foreground/80">
                REN AI ASSISTANT
              </span>
            </div>
            <div className="text-sm text-muted-foreground">•••</div>
          </div>

          {/* Mockup content */}
          <div className="relative z-10 grid lg:grid-cols-2">
            {/* Chat panel */}
            <div className="relative flex flex-col border-r border-border/50 bg-black/30 backdrop-blur-sm">
              {/* Chat messages - scrollable area */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {/* User message */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/30">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground rounded-lg bg-muted/30 backdrop-blur-sm px-4 py-3 border border-border/30">
                        Make my unit tests more precise
                      </p>
                    </div>
                  </div>

                  {/* AI Trace - Tool Usage */}
                  <div className="ml-11">
                    <div className="mb-2 text-xs text-muted-foreground/60">
                      <span className="font-mono">Change hash #435456464</span>
                    </div>
                    <div className="space-y-2 border-l-2 border-accent/30 pl-4">
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                          <span className="font-mono">Tool: ReadFile</span>
                          <span className="text-accent/60">→</span>
                          <span>module.py</span>
                          <span className="font-mono text-[10px] text-muted-foreground/50">
                            check hash #95u4...
                          </span>
                        </div>
                        <button className="flex items-center text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">
                          <span className="text-[8px]">···</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                          <span className="font-mono">
                            Analyzing code structure...
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground/50">
                            check hash #a3k9...
                          </span>
                        </div>
                        <button className="flex items-center text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">
                          <span className="text-[8px]">···</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent/60 animate-pulse" />
                          <span className="font-mono">Tool: SearchRepo</span>
                          <span className="text-accent/60">→</span>
                          <span>Finding test patterns</span>
                          <span className="font-mono text-[10px] text-muted-foreground/50">
                            check hash #f7m2...
                          </span>
                        </div>
                        <button className="flex items-center text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">
                          <span className="text-[8px]">···</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                          <span className="font-mono">
                            Generating unit tests...
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground/50">
                            check hash #b8n1...
                          </span>
                        </div>
                        <button className="flex items-center text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">
                          <span className="text-[8px]">···</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/30 ring-1 ring-accent/40">
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
                          <span className="font-mono text-xs text-muted-foreground">
                            test_module.py
                          </span>
                        </div>
                        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
                          <code>
                            <div className="text-[#d4d4d4]">
                              <span className="text-[#569cd6]">import</span>{" "}
                              <span className="text-[#9cdcfe]">unittest</span>
                            </div>
                            <div className="text-[#d4d4d4]">
                              <span className="text-[#569cd6]">import</span>{" "}
                              <span className="text-[#9cdcfe]">datetime</span>
                            </div>
                            <div></div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              <span className="text-[#569cd6]">class</span>{" "}
                              <span className="text-[#dcdcaa]">
                                TestParseExpenses
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">unittest</span>
                              <span className="text-[#ce9178]">.</span>
                              <span className="text-[#dcdcaa]">TestCase</span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">:</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"    "}
                              <span className="text-[#569cd6]">def</span>{" "}
                              <span className="text-[#dcdcaa]">
                                test_parse_expenses_with_valid_input
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">self</span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">:</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">
                                expenses_string
                              </span>{" "}
                              <span className="text-[#d4d4d4]">=</span>{" "}
                              <span className="text-[#ce9178]">
                                "2023-01-01 -34.01 USD\\n..."
                              </span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">
                                expected_output
                              </span>{" "}
                              <span className="text-[#d4d4d4]">=</span>{" "}
                              <span className="text-[#ce9178]">[(</span>
                              <span className="text-[#4ec9b0]">datetime</span>
                              <span className="text-[#ce9178]">.</span>
                              <span className="text-[#4ec9b0]">datetime</span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#b5cea8]">2023</span>
                              <span className="text-[#808080]">,</span>{" "}
                              <span className="text-[#b5cea8]">1</span>
                              <span className="text-[#808080]">,</span>{" "}
                              <span className="text-[#b5cea8]">1</span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">,</span>{" "}
                              <span className="text-[#ce9178]">...)]</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">self</span>
                              <span className="text-[#ce9178]">.</span>
                              <span className="text-[#dcdcaa]">
                                assertEqual
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#dcdcaa]">
                                parse_expenses
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">
                                expenses_string
                              </span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">,</span>{" "}
                              <span className="text-[#9cdcfe]">
                                expected_output
                              </span>
                              <span className="text-[#ce9178]">)</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"    "}
                              <span className="text-[#569cd6]">def</span>{" "}
                              <span className="text-[#dcdcaa]">
                                test_parse_expenses_with_empty_input
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">self</span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">:</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">
                                expenses_string
                              </span>{" "}
                              <span className="text-[#d4d4d4]">=</span>{" "}
                              <span className="text-[#ce9178]">""</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">
                                expected_output
                              </span>{" "}
                              <span className="text-[#d4d4d4]">=</span>{" "}
                              <span className="text-[#ce9178]">[]</span>
                            </div>
                            <div className="bg-green-500/10">
                              <span className="inline-block w-6 select-none text-green-500/60">
                                +
                              </span>
                              {"        "}
                              <span className="text-[#9cdcfe]">self</span>
                              <span className="text-[#ce9178]">.</span>
                              <span className="text-[#dcdcaa]">
                                assertEqual
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#dcdcaa]">
                                parse_expenses
                              </span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">
                                expenses_string
                              </span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">,</span>{" "}
                              <span className="text-[#9cdcfe]">
                                expected_output
                              </span>
                              <span className="text-[#ce9178]">)</span>
                            </div>
                            <div className="bg-red-500/10">
                              <span className="inline-block w-6 select-none text-red-500/60">
                                -
                              </span>
                            </div>
                            <div className="bg-red-500/10">
                              <span className="inline-block w-6 select-none text-red-500/60">
                                -
                              </span>
                              {"    "}
                              <span className="text-[#808080]">
                                # Old test implementation
                              </span>
                            </div>
                            <div className="bg-red-500/10">
                              <span className="inline-block w-6 select-none text-red-500/60">
                                -
                              </span>
                              {"    "}
                              <span className="text-[#569cd6]">def</span>{" "}
                              <span className="text-[#dcdcaa]">test_basic</span>
                              <span className="text-[#ce9178]">(</span>
                              <span className="text-[#9cdcfe]">self</span>
                              <span className="text-[#ce9178]">)</span>
                              <span className="text-[#808080]">:</span>
                            </div>
                            <div className="bg-red-500/10">
                              <span className="inline-block w-6 select-none text-red-500/60">
                                -
                              </span>
                              {"        "}
                              <span className="text-[#569cd6]">pass</span>
                            </div>
                          </code>
                        </pre>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        The code assumes that the datetime module is imported.
                        The test cases cover different scenarios such as valid
                        input, empty input, input with invalid date format, and
                        invalid value format.
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
                  <button className="text-accent transition-transform hover:scale-110">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Code editor panel */}
            <div className="relative flex flex-col bg-black/50 backdrop-blur-sm">
              <div className="p-6 pb-4">
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-md bg-accent/20 px-2 py-1 font-medium">
                    Preview
                  </span>
                  <span className="font-mono">test_module.py</span>
                </div>
              </div>
              <div className="flex-1 overflow-hidden px-6">
                <div className="relative h-[540px] overflow-hidden rounded-lg border border-border/50 bg-black/90">
                  <pre className="flex h-full text-xs leading-relaxed text-foreground/90 font-mono">
                    {/* Line numbers */}
                    <div className="select-none border-r border-border/30 bg-black/60 px-3 py-4 text-right font-mono text-muted-foreground/60">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div key={i} className="leading-relaxed">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    {/* Code content */}
                    <code className="flex-1 overflow-y-auto overflow-x-auto px-4 py-4">
                      <div className="text-[#d4d4d4]">
                        <div>
                          <span className="text-[#569cd6]">import</span>{" "}
                          <span className="text-[#9cdcfe]">unittest</span>
                        </div>
                        <div>
                          <span className="text-[#569cd6]">import</span>{" "}
                          <span className="text-[#9cdcfe]">datetime</span>
                        </div>
                        <div></div>
                        <div>
                          <span className="text-[#569cd6]">class</span>{" "}
                          <span className="text-[#dcdcaa]">
                            TestParseExpenses
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">unittest</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">TestCase</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">def</span>{" "}
                          <span className="text-[#dcdcaa]">
                            test_parse_expenses_with_valid_input
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">
                            "2023-01-01 -34.01 USD\\n..."
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expected_output
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">[(</span>
                          <span className="text-[#4ec9b0]">datetime</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#4ec9b0]">datetime</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#b5cea8]">2023</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#b5cea8]">1</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#b5cea8]">1</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#808080]">...)]</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#dcdcaa]">parse_expenses</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#9cdcfe]">
                            expected_output
                          </span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div></div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">def</span>{" "}
                          <span className="text-[#dcdcaa]">
                            test_parse_expenses_with_empty_input
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">""</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expected_output
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">[]</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#dcdcaa]">parse_expenses</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#9cdcfe]">
                            expected_output
                          </span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div></div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">def</span>{" "}
                          <span className="text-[#dcdcaa]">
                            test_parse_expenses_with_invalid_date_format
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">
                            "invalid-date -34.01 USD"
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">with</span>{" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertRaises</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#4ec9b0]">ValueError</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#dcdcaa]">parse_expenses</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div></div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">def</span>{" "}
                          <span className="text-[#dcdcaa]">
                            test_parse_expenses_with_comments
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">
                            "# Comment line\\n2023-01-01 -34.01 USD"
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">result</span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#dcdcaa]">parse_expenses</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">len</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">result</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#b5cea8]">1</span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div></div>
                        <div>
                          {" "}
                          <span className="text-[#569cd6]">def</span>{" "}
                          <span className="text-[#dcdcaa]">
                            test_parse_expenses_multiple_currencies
                          </span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#ce9178]">
                            "2023-01-01 -34.01 USD\\n2023-01-02 -2.59 EUR"
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">result</span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#dcdcaa]">parse_expenses</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">
                            expenses_string
                          </span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">len</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">result</span>
                          <span className="text-[#ce9178]">)</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#b5cea8]">2</span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">result</span>
                          <span className="text-[#ce9178]">[</span>
                          <span className="text-[#b5cea8]">0</span>
                          <span className="text-[#ce9178]">][</span>
                          <span className="text-[#b5cea8]">2</span>
                          <span className="text-[#ce9178]">]</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#ce9178]">"USD"</span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">self</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">assertEqual</span>
                          <span className="text-[#ce9178]">(</span>
                          <span className="text-[#9cdcfe]">result</span>
                          <span className="text-[#ce9178]">[</span>
                          <span className="text-[#b5cea8]">1</span>
                          <span className="text-[#ce9178]">][</span>
                          <span className="text-[#b5cea8]">2</span>
                          <span className="text-[#ce9178]">]</span>
                          <span className="text-[#808080]">,</span>{" "}
                          <span className="text-[#ce9178]">"EUR"</span>
                          <span className="text-[#ce9178]">)</span>
                        </div>
                        <div></div>
                        <div>
                          <span className="text-[#569cd6]">if</span>{" "}
                          <span className="text-[#9cdcfe]">__name__</span>{" "}
                          <span className="text-[#d4d4d4]">==</span>{" "}
                          <span className="text-[#ce9178]">"__main__"</span>
                          <span className="text-[#808080]">:</span>
                        </div>
                        <div>
                          {" "}
                          <span className="text-[#9cdcfe]">unittest</span>
                          <span className="text-[#ce9178]">.</span>
                          <span className="text-[#dcdcaa]">main</span>
                          <span className="text-[#ce9178]">()</span>
                        </div>
                      </div>
                    </code>
                  </pre>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
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
      </div>
    </section>
  );
}
