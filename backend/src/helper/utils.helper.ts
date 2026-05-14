const synchronizeNameFields = (update: Partial<{
    fullName?: string;
    firstName?: string;
    lastName?: string;
}>): { fullName?: string; firstName?: string; lastName?: string; } => {
    if (!update?.firstName && !update?.lastName && !update?.fullName) return update;
    if (update.fullName && !update.firstName && !update.lastName) {
        const nameParts = update.fullName?.split(/\s+/);
        update.firstName = nameParts.slice(0, -1).join(' ').trim() || nameParts[0].trim();
        update.lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : '';
    } else {
        const firstName = update.firstName?.trim() || '';
        const lastName = update.lastName?.trim() || '';
        update.fullName = `${firstName} ${lastName}`.trim();
    }
    return update;
};

const safeAsync = async <T>(promise: Promise<T>): Promise<[Error | null, T | null]> => {
    try {
        const data = await promise;
        return [null, data];
    } catch (err) {
        return [err as Error, null];
    }
};

export {
    synchronizeNameFields,
    safeAsync
};