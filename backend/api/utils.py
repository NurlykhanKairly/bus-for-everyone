
def has_permission(created_by, user):
    return created_by.id == user.id
