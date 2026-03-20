function submitProposal() {
  return {
    // === YOUR PROPOSAL ===
    problem_title: "Weak onboarding sends beginners into the wrong kata too early",
    category: "onboarding_ux",
    problem_statement:
      "Codewars does not reliably guide new users into a first training path that matches their real skill level, language familiarity, or need for feedback. A beginner can choose a language, land on a kata with a very low completion rate or vague instructions, fail quickly, and leave with the impression that the platform is hostile rather than challenging. The visible problem is 'I picked a kata and got stuck,' but the deeper problem is that discovery, difficulty signaling, and early learning support are not coordinated. Completion rate, rank, issue status, and prerequisite knowledge are not turned into a clear beginner-safe path. That breaks the first-session experience and likely hurts retention long before users understand how to search, skip wisely, or use collections and discourse to recover.",
    who_affected:
      "This affects true beginners most, especially students, career switchers, and users trying a new language for the first time. It also affects intermediate users exploring unfamiliar stacks, because the platform gives limited guardrails about whether a kata is conceptually advanced, poorly maintained, or simply a bad first choice. Kata authors and moderators are affected too, because confused users often leave low-quality feedback, abandon attempts, or blame individual kata for platform-level discovery problems.",
    evidence:
      "This problem shows up repeatedly in community discussions about confusing kata difficulty, low completion-rate traps, and the gap between rank labels and actual accessibility. The mission prompt itself gives the exact example of a new JavaScript user being routed toward a kata with an 8% completion rate and leaving discouraged, which signals that the issue is already recognized by Codewars as real and important. That lines up with a common user experience: new members do not yet know which signals to trust, so they treat the first recommendation as a safe default when it often is not.",
    feasibility_score: 4,
​
    // === ABOUT YOU ===
    role: "student",
    experience_years: "0-2",
​
    // === YOUR PROCESS ===
    worked_solo_or_team: "solo",
    ai_tools_used: ["ChatGPT"],
    primary_ai_tool: "ChatGPT",
    ai_usage_percent: 35,
    where_ai_helped: ["ideation", "writing", "analysis"],
    where_ai_fell_short:
      "AI helped structure the proposal, but it could not reliably judge which Codewars pain points are most important to the community without overgeneralizing. It also tends to jump too quickly to solutions instead of staying focused on the root problem, and it can make feedback sound polished without proving that the evidence is strong enough.",
    other_tools_used: "Codewars kata page, personal experience, browser notes",
    time_spent_minutes: 28
  };
}