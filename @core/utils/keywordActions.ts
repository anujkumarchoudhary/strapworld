export const ACTION_KEYWORDS = {
  schedule: ['call', 'book', 'schedule'],
};

export type ActionType = 'schedule' | 'enquiry';

export const getActionTypeFromText = (text: string): ActionType => {
  const lowerText = text.toLowerCase();

  if (ACTION_KEYWORDS.schedule.some(keyword => lowerText.includes(keyword))) {
    return 'schedule';
  }

  return 'enquiry';
};